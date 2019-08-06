const PORT = 3000;

module.exports = (server: any) => {
  server.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
  });
};
