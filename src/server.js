import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import postsRouter from './routes/postsRouter';
import resLocals from './middlewares/resLocals';

const app = express();
const PORT = 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx'); // res.render
app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(resLocals);
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
