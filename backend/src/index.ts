import express from 'express';
import cors from 'cors';
import graphRouter from './routes/graph';

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェア設定
app.use(cors());
app.use(express.json());

// ルーティング
app.use('/api', graphRouter);

// 404 ハンドリング
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// サーバ起動
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
