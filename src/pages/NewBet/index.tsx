import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { gameActions } from '@store/game-slice';

import { BetNumber } from '@components/BetNumber';
import { Cart } from '@components/Cart';
import { Footer } from '@components/Footer';
import { GameButton } from '@components/GameButton';
import { LoggedComponent } from '@components/LoggedComponent';
import { NotFound }  from '@components/NotFoundPage';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  GamesType,
  ContentNumbers,
  ContentButtons,
  BetButton,
  AddButton
} from './styles';

interface GameProps {
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected: boolean;
}

export function NewBet() {
  const dispatch = useDispatch();
  const games = useSelector((state: RootStateOrAny) => state.game.types);
  const gameSelected = useSelector(
    (state: RootStateOrAny) => state.game.active
  );
  const userLogged = useSelector(
    (state: RootStateOrAny) => state.auth.userLogged
  );

  let numbers: number[] = [];

  for (let i = 1; i <= gameSelected.range; i++) {
    numbers.push(i);
  }

  function selectGame(name: string) {
    dispatch(gameActions.selectGame(name));
  }

  function clearGame() {
    dispatch(gameActions.clearGame());
  }

  function completeGame() {
    dispatch(gameActions.completeGame());
  }

  function addGameToCart() {
    dispatch(gameActions.addGameToCart());
  }
  return (
    <>
      {userLogged.isLoggedIn ? (
        <>
          <LoggedComponent isNewBetPage={true}>
            <Container>
              <h2>
                <strong>NEW BET</strong> FOR{' '}
                <span>{gameSelected.name.toUpperCase()}</span>
              </h2>
              <p>Choose a game</p>

              <GamesType>
                {games.map((game: GameProps) => {
                  return (
                    <GameButton
                      key={game.name}
                      color={game.color}
                      text={game.name}
                      onClick={() => selectGame(game.name)}
                      selected={game.selected}
                    />
                  );
                })}
              </GamesType>

              <p>Fill your bet</p>
              <span>{gameSelected.description}</span>

              <ContentNumbers>
                {numbers.map((number: number) => (
                  <BetNumber
                    color={gameSelected.color}
                    key={number}
                    number={number}
                  />
                ))}
              </ContentNumbers>

              <ContentButtons>
                <div>
                  <BetButton onClick={completeGame}>Complete game</BetButton>
                  <BetButton onClick={clearGame}>Clear game</BetButton>
                </div>

                <div>
                  <AddButton onClick={addGameToCart}>
                    <AiOutlineShoppingCart />
                    Add to cart
                  </AddButton>
                </div>
              </ContentButtons>
            </Container>

            <Cart />
          </LoggedComponent>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="colored"
          />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
