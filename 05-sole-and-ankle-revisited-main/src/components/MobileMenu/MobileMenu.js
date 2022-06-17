/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: var(--color-backdrop);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Content = styled(DialogContent)`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  justify-content: space-between;
  overflow-y: auto;
  padding: 32px 22px;
  position: absolute;
  right: 0;
  top: 0;
  width: 80%;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  position: relative;
  right: -6px;
  top: -6px;
`;

const Nav = styled.nav`
  display: grid;
  gap: 22px;
  text-decoration: none;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: grid;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  font-weight: var(--font-weight-normal);
  text-decoration: none;
`;

export default MobileMenu;
