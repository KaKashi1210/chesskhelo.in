export const ALPHABETS = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const MOVE_COLOR_WHITE = "w";
export const PIECE_DEFAULT_POSITION_LIST = {
  a8: "br",
  b8: "bn",
  c8: "bb",
  d8: "bq",
  e8: "bk",
  f8: "bb",
  g8: "bn",
  h8: "br",
  a1: "wr",
  b1: "wn",
  c1: "wb",
  d1: "wq",
  e1: "wk",
  f1: "wb",
  g1: "wn",
  h1: "wr",
  a7: "bp",
  b7: "bp",
  c7: "bp",
  d7: "bp",
  e7: "bp",
  f7: "bp",
  g7: "bp",
  h7: "bp",
  a2: "wp",
  b2: "wp",
  c2: "wp",
  d2: "wp",
  e2: "wp",
  f2: "wp",
  g2: "wp",
  h2: "wp",
};

// Chess Move Event Flags
export const NON_CAPTURE = "n";
export const PAWN_PUSH_TWO_SQUARES = "b";
export const EN_PASSANT_CAPTURE = "e";
export const STANDARD_CAPTURE = "c";
export const PROMOTION = "p";
export const KING_SIDE_CASTLING = "k";
export const QUEEN_SIDE_CASTLING = "q";

// IDs
export const CHESS_BOARD_ID = "chess-board";
export const WHITE_ROOK_KING_SIDE_ID = "h1-wr";
export const WHITE_ROOK_QUEEN_SIDE_ID = "a1-wr";
export const BLACK_ROOK_KING_SIDE_ID = "h8-br";
export const BLACK_ROOK_QUEEN_SIDE_ID = "a8-br";

// Castling Rook's Destination IDs
export const CASTLED_WHITE_ROOK_KING_SIDE_DESTINATION_ID = "f1";
export const CASTLED_WHITE_ROOK_QUEEN_SIDE_DESTINATION_ID = "d1";
export const CASTLED_BLACK_ROOK_KING_SIDE_DESTINATION_ID = "f8";
export const CASTLED_BLACK_ROOK_QUEEN_SIDE_DESTINATION_ID = "d8";

// Square Types
export const SQUARE_TYPE_LIGHT = "l";
export const SQUARE_TYPE_DARK = "d";