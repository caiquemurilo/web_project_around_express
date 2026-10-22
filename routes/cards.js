import { Router } from 'express';
import {getCards, createCard, deleteCard, likeCard, unlikeCard} from '../controllers/cards.js';

const router = Router();

router.get('/', getCards);
router.post('/', createCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', unlikeCard);
router.delete('/:cardId', deleteCard);

export default router;