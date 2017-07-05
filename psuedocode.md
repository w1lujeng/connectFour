#Connect Four

###Initialize board

```
board consists of a 6x7 table
	each row is an array
	each column is an array
render the board
set player
player 1 turn
-set score-
reset button
set all cells to 0 with white background color
```
#1 Game play

1. player clicks on the button above the selected column
2. lowest available cell flips from white to red or black
3. cell is updated with value 1 or -1 for player 1 or player 2
4. column array is updated with new lowest available cell
5. If a column is full, button is disabled

#2  Win loop
5. computer checks from left to right if there is an absolute value of 4
6. computer checks from bottom to top to see if there is an absolute value of 4
7.	computer checks right diagonally to top to see if there is an absolute value of 4
8.	computer checks right diagonally down to see if there is an absolute value of 4
9. if players tie  message - "Game is tied, would you like to play again"	reset button shakes
10. if player one wins message - "Player 1 wins, would you like to play again"	reset button shakes
11. if player two wins message - "Player 2 wins, would you like to play again"	reset button shakes
12. all tds set back to white and value 0

13. if no winner multiply player by -1 to change players 
14. re-render board on reset

# 3 Would be nice
15. update player score
16. animate checkers coming down-constant time, thanks Jim
```temporarily fill and quickly unfill each td on	the way down```

17. smack talk audio
18. audio effects
19. customizable boards
20. personalization

