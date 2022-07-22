import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActions>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActions>
        <Logo />
        <SubscribeActions>
          <Button>Subscribe</Button>
          <SubscribeLink href="#foo">Already a subscriber?</SubscribeLink>
        </SubscribeActions>
      </MainHeader>

    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    align-items: center;
    justify-content: revert;
    justify-items: start;
  }
`;

const DesktopActions = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const SubscribeActions = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
    justify-self: end;
    position: relative;
  }
`;

const SubscribeLink = styled.a`
  color: var(--color-gray-900);
  font-family: 'Crimson Text';
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 22px;
  margin-block-start: 8px;
  position: absolute;
  text-align: center;
  text-decoration-line: underline;
  width: 100%;
`;

export default Header;
