import copy
from typing import List

EMPTY_SEAT = 'L'
OCCUPIED_SEAT = '#'
FLOOR = '.'
NEIGHBOUR_OFFSETS = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]


class ConcertHall:
    def __init__(self, seats: List[List[str]]):
        self._seats = seats
        self._next_seats = None

    def value(self, row_index: int, column_index: int) -> str:
        if not 0 <= row_index < len(self._seats):
            return FLOOR

        if not 0 <= column_index < len(self._seats[row_index]):
            return FLOOR

        return self._seats[row_index][column_index]

    def iterate_until_converge(self):
        while self.iterate():
            pass

    def iterate(self) -> bool:
        self._next_seats = copy.deepcopy(self._seats)
        updated = False
        for row_index in range(len(self._seats)):
            row = self._seats[row_index]
            for column_index in range(len(row)):
                updated = self._iterate_position(row_index, column_index) or updated
        self._seats = self._next_seats
        return updated

    def _iterate_position(self, row_index: int, column_index: int) -> bool:
        value = self.value(row_index, column_index)
        if value == EMPTY_SEAT:
            return self._iterate_empty_seat(row_index, column_index)
        elif value == OCCUPIED_SEAT:
            return self._iterate_occupied_seat(row_index, column_index)
        return False

    def _iterate_empty_seat(self, row_index: int, column_index: int) -> bool:
        if self._neighbour_count(row_index, column_index) == 0:
            self._next_seats[row_index][column_index] = OCCUPIED_SEAT
            return True
        return False

    def _iterate_occupied_seat(self, row_index: int, column_index: int) -> bool:
        if self._neighbour_count(row_index, column_index) >= 4:
            self._next_seats[row_index][column_index] = EMPTY_SEAT
            return True
        return False

    def _neighbour_count(self, row_index: int, column_index: int) -> int:
        neighbours = 0
        for row_offset, column_offset in NEIGHBOUR_OFFSETS:
            if self.value(row_index + row_offset, column_index + column_offset) == OCCUPIED_SEAT:
                neighbours += 1
        return neighbours

    def __str__(self):
        return '\n'.join([''.join(row) for row in self._seats])


def read_input(file_name: str) -> ConcertHall:
    with open(file_name, 'r') as file:
        return ConcertHall([[char for char in line.strip()] for line in file.readlines()])


if __name__ == '__main__':
    hall = read_input('test_input.txt')
    print(hall._seats)
    hall.iterate_until_converge()
    print(hall)

