import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Utils
import { AppContext } from '../contexts/AppProvider';

// Components
import Head from './head';
import Header from './Header';
import Footer from './Footer';

// Styling
import { GlobalStyles } from './styles';
import theme from '../theme';

const Page = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { menus } = useContext(AppContext);
  const title = 'Dept | Reinvent Digital';

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles openMenu={openMenu} />
        <Head title={title} />
        <Header
          title={title}
          menu={menus?.mainMenu}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <div>{children}</div>
        <Footer title={title} menu={menus?.footerMenu} />
      </div>
    </ThemeProvider>
  );
};

export default Page;
