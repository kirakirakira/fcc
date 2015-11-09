var prompt = require('prompt');

var scores = {'x': 1, 'draw': 0, 'o': -1};
var player_x; // = 'x';
var player_o; // = 'o';

/* board is 0 1 2
			3 4 5
			6 7 8
			*/

function create_new_board() {
	board = ['','','','','','','','',''];
	return board;
}

function make_move(board, player, move) {
	// should only be able to make this move if it is empty
	if (board[move] === '') {
		return board[move] = player;
	}
	else {
		return null;
	}
}

function display_board(board) {
	console.log(board);
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function switch_turn(player) {
	if (player === 'o') {
		turn = 'x';
	}
	else {
		turn = 'o';
	}
	return turn;
}

function whos_other_player(player) {
	if (player === 'x') {
		return 'o';
	}
	else {
		return 'x';
	}
}

function get_empty_squares(board) {
	var empty_squares = [];

	for (var i = 0; i < board.length; i++) {
		if (board[i] === '') {
			empty_squares.push(i);
		}
	}
	return empty_squares;
}

function check_win(board) {
	/* did the given player win on the given board?
	return which player won if it's a winning board, or false if neither won */
	var winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	var x_indexes = getAllIndexes(board, 'x');
	var o_indexes = getAllIndexes(board, 'o');

	for (var i = 0; i < winning.length; i++) {
		//console.log("checking this one: ", winning[i]);
		var x_yes = 0;
		var o_yes = 0;
		for (var j = 0; j < winning[i].length; j++) {

			if (x_indexes.indexOf(winning[i][j]) !== -1) {
				x_yes++;
			}
			
			if (o_indexes.indexOf(winning[i][j]) !== -1) {
				//console.log("whoo");
				o_yes++;
			}
		}

		if (x_yes === 3) {
			return 'x';
		}
		
		else if (o_yes === 3) {
			return 'o';
		}

		else if (get_empty_squares(board).length === 0) {
			return 'draw';
		}
	}
	//console.log("o", o_yes);
	return false;
}

function mm_move(board, player) {
	/* Make a move on the board.
	Returns an object with two elements: first is the score of the given board,
	and the second is the desired move
	*/

	// Move's scores -- {move: score}, init as empty
	var moves_scores = {};

	// Check if board is a win and return score and illegal move (HOW TO DO THIS?)

	if (check_win(board) === player) {
		// if the player who's move it is has already won
		//console.log("checked and found a win for this player");
		return [scores[player], -1];
	}

	else if (check_win(board) === 'draw') {
		//console.log("checked and found a draw");
		return [scores['draw'], -1];
	}

	else if (check_win(board) === whos_other_player(player)) {
		//console.log("checked and found a win for the other player");
		return [scores[whos_other_player(player)], -1];
	}

	// For each empty square
	// NEED TO CHECK ONLY EMPTY SQUARES NOT ALL OF THEM
	var empty_squares = get_empty_squares(board);

	for (var i = 0; i < empty_squares.length; i++) {

		//console.log("check spot # ", empty_squares[i]);

		// Create a copy of the board with the empty square as a move

		var board_copy = board.slice(0);

		make_move(board_copy, player, empty_squares[i]);

		// Recursively call mm_move with opposite player and the copy of the board

		var next_player = switch_turn(player);
		
		returned_arr = mm_move(board_copy, next_player);
		//console.log("returned score", returned_arr[0]);

		//returned_arr = [returned_score, dummy_returned_move]

		// I don't know what these next lines do -- probably can remove them
		// if (scores[player] === returned_arr[0]) {
		// 	//console.log('the score returned is equal to the score for the current player');
			
		// 	return [scores[player], empty_squares[i]];
		// }

		// Add {returned score: empty square (this is the move you took)} to moves_scores
		moves_scores[returned_arr[0]] = empty_squares[i];
		
	}

	// Return the move with the highest score from move_scores and multiply by scores[player] (current player)
	//console.log("moves_scores options", moves_scores);
	

	//console.log('need to find the max of these scores', moves_scores_keys);

	function find_max_score(scores_object) {
		var scores_object_keys = Object.keys(scores_object);
		var max_score = -100;
		for (var i = 0; i < scores_object_keys.length; i++) {
			if (parseInt(scores_object_keys[i]) > max_score) {
			max_score = parseInt(scores_object_keys[i]);
			}
		}
		return max_score;
	}

	function find_min_score(scores_object) {
		var scores_object_keys = Object.keys(scores_object);
		var min_score = 100;
		for (var i = 0; i < scores_object_keys.length; i++) {
			if (parseInt(scores_object_keys[i]) < min_score) {
			min_score = parseInt(scores_object_keys[i]);
			}
		}
		return min_score;
	}

	// console.log("testing find max score ", find_max_score({'-1':7, '0':1, '1':5}));

	if (player === 'o') {
		return [find_min_score(moves_scores), moves_scores[find_min_score(moves_scores)]];
	}
	else {
		return [find_max_score(moves_scores), moves_scores[find_max_score(moves_scores)]];
	}
	//console.log("max score is ", max_score);
	// max score is first, then the move to take to make that score is second
	//return [max_score*scores[player], moves_scores[max_score]];

}

function init_game() {
	//var board = create_new_board();
	//make_move(board,'x',2);
	var board = ['x','','','x','o','','','',''];
	display_board(board);
	turn = 'o';
	console.log("it is this player's turn ", turn);
	console.log("return from mm_move ", mm_move(board, turn));

	// make the computer take the move from mm_move
	// user then makes a move - turn needs to switch
	// computer does mm_move again
	// until there is a win or a draw

	// Start prompt to get move from user
	prompt.start();

	prompt.get(['next_move'], function (err, result) {
	  console.log('next move is: ' + result.next_move);
	});

}


init_game();
