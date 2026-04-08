import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{Default as i}from"./Footer.stories-f5HTs9DG.js";import{ForcedFullScreenAccountSelection as a,LoggedIn as o,Login as s}from"./GlobalHeader.stories-BRv5j5Zu.js";import{HiddenSidebar as c,Preview as l}from"./Layout.stories-D9DuHJEx.js";var u=e();function d(e){let d={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`Layout`}),`
`,(0,u.jsx)(d.h1,{id:`global-layout`,children:`Global Layout`}),`
`,(0,u.jsxs)(d.p,{children:[`The global layout is shared accross applications and provides a common `,(0,u.jsx)(d.code,{children:`GlobalHeader`}),` and `,(0,u.jsx)(d.code,{children:`Footer`}),`, as well as a container for a local `,(0,u.jsx)(d.code,{children:`Menu`}),`.`]}),`
`,(0,u.jsxs)(d.p,{children:[`Use `,(0,u.jsx)(d.code,{children:`Layout`}),` by providing the `,(0,u.jsx)(d.code,{children:`header`}),` and `,(0,u.jsx)(d.code,{children:`footer`}),` props, and an optional `,(0,u.jsx)(d.code,{children:`sidebar`}),`. Layout must be wripped in an `,(0,u.jsx)(d.code,{children:`RootProvider`}),` to enable shared context across all components.
Provide the `,(0,u.jsx)(d.code,{children:`RootProvider`}),` with the current language of your application to make sure all internal texts of the Layout are set accordingly.
The Layout supports three languages: English (`,(0,u.jsx)(d.code,{children:`en`}),`), Norwegian Bokmål (`,(0,u.jsx)(d.code,{children:`no`}),`), and Norwegian Nynorsk (`,(0,u.jsx)(d.code,{children:`nn`}),`), where Norwegian Bokmål is the default`]}),`
`,(0,u.jsxs)(d.p,{children:[`Add a `,(0,u.jsx)(d.code,{children:`color`}),` and a `,(0,u.jsx)(d.code,{children:`theme`}),` and include the content for your application as `,(0,u.jsx)(d.code,{children:`children`}),`.`]}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{className:`language-tsx`,children:`import { RootProvider, Layout } from '@altinn/components';

function App() {
  return (
    <RootProvider languageCode="nb">
      <Layout {...layoutProps} color={<Color>} theme={<Theme>}>
        { /* Your application here */ }
      </Layout>
    </RootProvider>
  );
}
`})}),`
`,(0,u.jsx)(d.h2,{id:`the-header`,children:`The Header`}),`
`,(0,u.jsxs)(d.p,{children:[`Use `,(0,u.jsx)(d.code,{children:`header`}),` to includes a header with global menu and search, as well as an account switcher when user is logged in.`]}),`
`,(0,u.jsx)(t,{of:o}),`
`,(0,u.jsxs)(d.p,{children:[`Prior to login, the global menu should include a prominent link to signing in.
The AccountSelector should automatically transform to a login button if `,(0,u.jsx)(d.code,{children:`currentAccount`}),` is undefined.
In this state, clicking the button will trigger the `,(0,u.jsx)(d.code,{children:`onLoginClick`}),` function provided to the header.`]}),`
`,(0,u.jsx)(t,{of:s}),`
`,(0,u.jsxs)(d.p,{children:[`The header handles opening and closing of its menus internally. However, the accountSelector can be forced open by setting the `,(0,u.jsx)(d.code,{children:`forceOpenFullScreen`}),` prop.
While this flag is set, the accountMenu will always remain open, and in its fullscreen mode.
Use this to force the user to select an account, for example if no valid account is chosen.`]}),`
`,(0,u.jsx)(t,{of:a,story:{inline:!1,height:`600px`}}),`
`,(0,u.jsx)(d.h3,{id:`the-useaccountmenu-hook`,children:`The UseAccountMenu hook`}),`
`,(0,u.jsx)(d.p,{children:`To simplify the use of the new AccountSelector component, use the useAccountMenu.
This hook takes any needed data, such as the list of available actors and the list of favorites on the same data model as is expected from their respective API sources.
The hook handles all mapping, logic, and sorting nessesary for displaying the account list. Using this hook sentralizes logic and ensures a consistant view of the accountSelector across all products of the Altinn Portal.`}),`
`,(0,u.jsx)(d.p,{children:`Note that the accountData should be fetched from Access Management (which returns a list of authorizedParty objects), and the favorites should be fetched and updated in Core's profile API (which operates with a list of uuids).`}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{className:`language-tsx`,children:`// Fetch data from different sources or APIs as needed (abstracted to hooks here for the example)
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const [currentAccountUuid, setCurrentAccountUuid] = useCurrentAccount(); // Fetch current account from global state
  const selfAccountUuid = useCurrentAccount(); // Get the user's own account UUID from token or other source

  // Handler for toggling favorite accounts
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };

  // Use the useAccountSelector hook to get account menu and loading state
  const accountSelector = useAccountSelector({
    partyListDTO: state === 'loggedIn' ? authorizedParties : [],
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: state === 'loggedIn' ? selfAccountUuid : undefined,
    currentAccountUuid: state === 'loggedIn' ? currentAccountUuid : undefined,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: languageCode,
    isLoading: state === 'loading',
  });

  <GlobalHeader accountSelector={accountSelector} globalMenu={globalMenu} globalSearch={{ onSearch }}  />
`})}),`
`,(0,u.jsx)(d.h2,{id:`the-footer`,children:`The Footer`}),`
`,(0,u.jsxs)(d.p,{children:[`Use `,(0,u.jsx)(d.code,{children:`footer`}),` to includes an address and a list of helpful links.`]}),`
`,(0,u.jsx)(t,{of:i}),`
`,(0,u.jsx)(d.h2,{id:`the-sidebar`,children:`The Sidebar`}),`
`,(0,u.jsxs)(d.p,{children:[`Use `,(0,u.jsx)(d.code,{children:`sidebar`}),` to unclude an optional local menu. It can be hidden, or omitted completely. When omitted main content will span the full width of the page.`]}),`
`,(0,u.jsx)(d.h2,{id:`layout-composition`,children:`Layout composition`}),`
`,(0,u.jsxs)(d.p,{children:[`While the preferred way of using layout is the `,(0,u.jsx)(d.code,{children:`Layout`}),` component itself, it is possible to build a layout using the underlying components.`]}),`
`,(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{className:`language-tsx`,children:`import { LayoutBase, GlobalHeader, LayoutBody, LayoutSidebar, Menu, LayoutContent, Footer } from "@altinn/altinn-components";

return (
  <LayoutBase>
    <GlobalHeader />
    <LayoutBody>
        <LayoutSidebar>
            <Menu />
        <LayoutContent>
            <!-- Your content -->
        </LayoutContent>
    </LayoutBody>
    <Footer />
  </LayoutBase>
);
`})}),`
`,(0,u.jsx)(d.h2,{id:`preview`,children:`Preview`}),`
`,(0,u.jsx)(d.p,{children:`Layout with sidebar.`}),`
`,(0,u.jsx)(t,{of:l}),`
`,(0,u.jsx)(d.p,{children:`Layout with hidden sidebar.`}),`
`,(0,u.jsx)(t,{of:c})]})}function f(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(d,{...e})}):d(e)}export{f as default};