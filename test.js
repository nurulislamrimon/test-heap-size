const testHeapSize = () => {
  const { rss, heapTotal, heapUsed } = process.memoryUsage();
  setInterval(() => {
    console.log(
      "---------------",
      numeral(rss).format("0.0 ib"),
      numeral(heapTotal).format("0.0 ib"),
      numeral(heapUsed).format("0.0 ib")
    );
  }, 5000);
};

export default testHeapSize;
