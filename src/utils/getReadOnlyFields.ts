export default (board: (null|number)[]) => board
  .map((row: any) => {
    const readOnlyColumns: number[] = [];

    row.forEach((value: null|number, columnNumber: number) => {
      if (value !== null) {
        readOnlyColumns.push(columnNumber);
      }
    });

    return readOnlyColumns;
  });
