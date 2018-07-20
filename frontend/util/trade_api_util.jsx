export const createFill = (fill) => (
  $.ajax({
    url: `/api/fills`,
    method: 'POST',
    data: { fill }
  })
);
