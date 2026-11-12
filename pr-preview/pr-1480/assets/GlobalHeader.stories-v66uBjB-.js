var L=Object.defineProperty;var r=(t,u)=>L(t,"name",{value:u,configurable:!0});import{a7 as a,x as g,aa as A}from"./iframe-SD2JkkBx.js";import{G as d}from"./GlobalHeader-Bdc8Rgzj.js";import{u as h}from"./useGlobalHeader-CYiMYp2a.js";import{u as F,a as G,g as M}from"./accountDataFetchers-B37ZW-_K.js";import{h as D}from"./header-ID-6NjYt.js";import{a as I}from"./useLocale-CTV-FNfu.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Cel6HB35.js";import"./GlobalAccountButton-C-KOrR8o.js";import"./Avatar-ChkBInZc.js";import"./ChevronDown-ComuAOz9.js";import"./Enter-Cq5qF9Z6.js";import"./GlobalMenuButton-mxTpEkZX.js";import"./commonTexts-CG1mkCQM.js";import"./MenuHamburger-Wy7pQwlx.js";import"./Badge-BbMhpBgn.js";import"./Tooltip-CTbeRzRw.js";import"./ChevronUp-hnI_g5yp.js";import"./Dropdown-DNvFP9FV.js";import"./AccountSelector-Cop3lB5s.js";import"./SearchField-CtzaZVEy.js";import"./MagnifyingGlass-99de9OEC.js";import"./MenuListItem-D9pwYymO.js";import"./MenuListDivider-B9dhr0kB.js";import"./MenuItem-DtEaYpyr.js";import"./CheckboxUncheckedIcon-DpMW6Wp2.js";import"./RadioUncheckedIcon-tgX_k-4X.js";import"./ItemMedia-WgmEjgHK.js";import"./AvatarGroup-DfwMjEOK.js";import"./ItemLabel-BHU5o8nH.js";import"./Heading-Bxu0IPlw.js";import"./useHighlightedText-BOE_uc-4.js";import"./ItemControls-CYQHXshs.js";import"./ChevronRight-N_DPzqc2.js";import"./FieldBase-BELwbvmB.js";import"./Typography-DYbohGA0.js";import"./Field-C50xRSHN.js";import"./Label-BJSodJlT.js";import"./Input-Fr_9ZdVX.js";import"./useMenu-Bkg094iM.js";import"./InformationSquare-CgIS3Fvj.js";import"./Switch-D5l1sJVB.js";import"./AccountMenu-8QL85dEA.js";import"./GlobalMenu-wKMszXw_.js";import"./Checkmark-ChNJFaj8.js";import"./ArrowUndo-CXChIdxN.js";import"./Globe-B33k006i.js";import"./name-Dr5DH52l.js";import"./HeartFill-Bgg5VGzh.js";import"./globalMenu-GkPccjNA.js";import"./PersonCircle-CboEv5N6.js";import"./Buildings2-B5kNdPhs.js";import"./InboxFill-B_-j2dv9.js";import"./MenuGrid-Cq_-kqfQ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-D-9J-S2m.js";import"./Archive-D_jolVYJ.js";import"./Trash-CPezUXOI.js";import"./useAccountMenu-BwmrOLiU.js";const{expect:e,userEvent:v,waitFor:b,within:s}=__STORYBOOK_MODULE_TEST__,We={title:"Layout/GlobalHeader",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...D}},y=r(()=>{const t=h({state:"loggedOut"});return a.jsx(g,{children:a.jsx(d,{...t})})},"Login"),B=r(()=>{const t=I({accountId:"diaspora"}),[u,i]=A.useState([]),[o,c]=A.useState("167536b5-f8ed-4c5a-8f48-0279507e53ae"),m=M(),S=F({partyListDTO:m,favoriteAccountUuids:u,onToggleFavorite:r(n=>{i(l=>l.includes(n)?l.filter(f=>f!==n):[...l,n])},"onToggleFavorite"),selfAccountUuid:"167536b5-f8ed-4c5a-8f48-0279507e53ae",currentAccountUuid:o,onSelectAccount:r(n=>{c(n)},"onSelectAccount"),languageCode:"nb",isLoading:!1});return a.jsx(g,{children:a.jsx(d,{globalMenu:t,accountSelector:S})})},"LoggedIn"),x={parameters:{screenshot:{skip:!0}},render:r(()=>{const t=h({state:"loggedIn"});return a.jsx(g,{children:a.jsx(d,{...t})})},"render"),play:r(async({canvasElement:t})=>{const u=t.ownerDocument,i=u.querySelector("#header-menu-root > button"),o=u.getElementById("header-menu-panel");e(i).not.toHaveAttribute("aria-haspopup"),e(i).toHaveAttribute("aria-expanded","false"),await v.click(i),await b(()=>e(i).toHaveAttribute("aria-expanded","true")),e(i).toHaveAttribute("aria-controls",o.id),e(o).not.toHaveAttribute("role"),e(o).not.toHaveAttribute("aria-modal");const c=s(o).getByRole("navigation");e(s(c).getAllByRole("list").length).toBeGreaterThan(0),e(s(c).getAllByRole("listitem").length).toBeGreaterThan(0),e(o.querySelectorAll('[role="menu"], [role="menuitem"], [role="menuitemradio"], [role="radiogroup"], [aria-haspopup]')).toHaveLength(0),e(s(c).getByRole("link",{name:"Innboks"})).toHaveAttribute("href"),e(s(c).getByRole("link",{name:"Min profil"})).toBeInTheDocument(),e(s(c).queryByRole("link",{name:"Språk/language"})).toBeNull(),e(s(c).getByRole("button",{name:"Språk/language"})).toBeInTheDocument(),e(i).toHaveFocus(),await v.tab(),e(c.contains(u.activeElement)).toBe(!0),await v.click(s(c).getByRole("button",{name:"Språk/language"}));const m=await s(o).findByRole("button",{name:"Bokmål"});await b(()=>e(o.querySelector("[data-id]")).toHaveFocus()),e(s(o).getByRole("heading",{name:"Språk/language"})).toBeInTheDocument(),e(m).toHaveAttribute("aria-current","true"),e(s(o).getByRole("button",{name:"English"})).not.toHaveAttribute("aria-current"),e(s(o).queryAllByRole("link")).toHaveLength(0),await v.click(o.querySelector("[data-id]")),await b(()=>e(s(o).getByRole("button",{name:"Språk/language"})).toHaveFocus()),await v.keyboard("{Escape}"),await b(()=>e(i).toHaveAttribute("aria-expanded","false")),await b(()=>e(i).toHaveFocus());const p=s(t).getByRole("button",{name:/^Bytt aktør: \S/});e(p).toHaveAttribute("aria-haspopup","dialog"),e(p).toHaveAttribute("aria-expanded","false"),await v.click(p),await b(()=>e(p).toHaveAttribute("aria-controls","header-account")),e(u.getElementById("header-account")?.tagName).toBe("DIALOG")},"play")},H=r(()=>{const t=h({currentAccountIndex:5});return a.jsx(g,{children:a.jsx(d,{...t})})},"CompanyAccount"),U=r(()=>{const t=h({currentAccountIndex:5});return a.jsx(d,{...t,disableAccountSelection:!0})},"DisabledAccountSelection"),w=r(()=>{const t=h({});return a.jsx(g,{children:a.jsx(d,{...t,badge:{label:"Beta",color:"person"}})})},"WithCustomBadge"),R=r(()=>{const t=h({state:"loading"});return a.jsx(g,{children:a.jsx(d,{...t})})},"Loading"),k=r(()=>{const{globalMenu:t,accountSelector:u,onLoginClick:i,locale:o}=h({state:"loading"});return a.jsx(g,{children:a.jsx(d,{globalMenu:t,accountSelector:u,onLoginClick:i,locale:o,disableAccountSelection:!0})})},"LoadingDisabledAccountSelection"),P=r(()=>{const t=I({accountId:"diaspora"}),[u,i]=A.useState([]),o=G(1e3),c=o.find(n=>n.type==="Person"||n.type==="SelfIdentified")?.partyUuid,[m,p]=A.useState(c),S=F({partyListDTO:o,favoriteAccountUuids:u,onToggleFavorite:r(n=>{i(l=>l.includes(n)?l.filter(f=>f!==n):[...l,n])},"onToggleFavorite"),selfAccountUuid:c,currentAccountUuid:m,onSelectAccount:r(n=>{p(n)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return a.jsx(g,{children:a.jsx(d,{globalMenu:t,accountSelector:S})})},"WithVirtualizationEnabled"),T=r(()=>{const t=I({accountId:"diaspora"}),[u,i]=A.useState([]),o=G(2),c=o.find(n=>n.type==="Person"||n.type==="SelfIdentified")?.partyUuid,[m,p]=A.useState(c),S=F({partyListDTO:o,favoriteAccountUuids:u,onToggleFavorite:r(n=>{i(l=>l.includes(n)?l.filter(f=>f!==n):[...l,n])},"onToggleFavorite"),selfAccountUuid:c,currentAccountUuid:m,onSelectAccount:r(n=>{p(n)},"onSelectAccount"),languageCode:"nb",isLoading:!1,virtualized:!0});return a.jsx(g,{children:a.jsx(d,{globalMenu:t,accountSelector:S})})},"WithShortAccountList"),Ve=["Login","LoggedIn","MenuIsNavigation","CompanyAccount","DisabledAccountSelection","WithCustomBadge","Loading","LoadingDisabledAccountSelection","WithVirtualizationEnabled","WithShortAccountList"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loggedOut'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>('167536b5-f8ed-4c5a-8f48-0279507e53ae');
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const selfAccountUuid = '167536b5-f8ed-4c5a-8f48-0279507e53ae';
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector} />
    </RootProvider>;
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  // Behaviour only, the look is covered by the stories above.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => {
    const header = useGlobalHeader({
      state: 'loggedIn'
    });
    return <RootProvider>
        <GlobalHeader {...header as GlobalHeaderProps} />
      </RootProvider>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const doc = canvasElement.ownerDocument;
    const menuButton = doc.querySelector('#header-menu-root > button') as HTMLElement;
    const panel = doc.getElementById('header-menu-panel') as HTMLElement;

    // The button shows and hides navigation. It does not claim to open a menu.
    expect(menuButton).not.toHaveAttribute('aria-haspopup');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(menuButton);
    await waitFor(() => expect(menuButton).toHaveAttribute('aria-expanded', 'true'));
    expect(menuButton).toHaveAttribute('aria-controls', panel.id);

    // The panel has no role. Inside is a nav with plain lists, and nothing is a menu.
    expect(panel).not.toHaveAttribute('role');
    expect(panel).not.toHaveAttribute('aria-modal');
    const nav = within(panel).getByRole('navigation');
    expect(within(nav).getAllByRole('list').length).toBeGreaterThan(0);
    expect(within(nav).getAllByRole('listitem').length).toBeGreaterThan(0);
    expect(panel.querySelectorAll('[role="menu"], [role="menuitem"], [role="menuitemradio"], [role="radiogroup"], [aria-haspopup]')).toHaveLength(0);

    // Items that go somewhere are links. The language item opens the language list in the menu, so it is a button.
    expect(within(nav).getByRole('link', {
      name: 'Innboks'
    })).toHaveAttribute('href');
    expect(within(nav).getByRole('link', {
      name: 'Min profil'
    })).toBeInTheDocument();
    expect(within(nav).queryByRole('link', {
      name: 'Språk/language'
    })).toBeNull();
    expect(within(nav).getByRole('button', {
      name: 'Språk/language'
    })).toBeInTheDocument();

    // Focus stays on the button, and Tab leads into the navigation right after it.
    expect(menuButton).toHaveFocus();
    await userEvent.tab();
    expect(nav.contains(doc.activeElement)).toBe(true);

    // The language list replaces the menu. Focus follows to its back button.
    await userEvent.click(within(nav).getByRole('button', {
      name: 'Språk/language'
    }));
    const current = await within(panel).findByRole('button', {
      name: 'Bokmål'
    });
    await waitFor(() => expect(panel.querySelector('[data-id]')).toHaveFocus());
    expect(within(panel).getByRole('heading', {
      name: 'Språk/language'
    })).toBeInTheDocument();
    expect(current).toHaveAttribute('aria-current', 'true');
    expect(within(panel).getByRole('button', {
      name: 'English'
    })).not.toHaveAttribute('aria-current');
    // Picking a language changes a setting and goes nowhere, so the languages stay buttons.
    expect(within(panel).queryAllByRole('link')).toHaveLength(0);

    // Going back, focus returns to the language item.
    await userEvent.click(panel.querySelector('[data-id]') as HTMLElement);
    await waitFor(() => expect(within(panel).getByRole('button', {
      name: 'Språk/language'
    })).toHaveFocus());

    // Escape closes the navigation and puts focus back on the button.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(menuButton).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(menuButton).toHaveFocus());

    // The account button says what it is for, and that it opens a dialog.
    const accountButton = within(canvasElement).getByRole('button', {
      name: /^Bytt aktør: \\S/
    });
    expect(accountButton).toHaveAttribute('aria-haspopup', 'dialog');
    expect(accountButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(accountButton);
    await waitFor(() => expect(accountButton).toHaveAttribute('aria-controls', 'header-account'));
    expect(doc.getElementById('header-account')?.tagName).toBe('DIALOG');
  }
}`,...x.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...H.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    currentAccountIndex: 5
  });
  return <GlobalHeader {...header as GlobalHeaderProps} disableAccountSelection />;
}`,...U.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({});
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} badge={{
      label: 'Beta',
      color: 'person'
    }} />
    </RootProvider>;
}`,...w.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const header = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader {...header as GlobalHeaderProps} />
    </RootProvider>;
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const {
    globalMenu,
    accountSelector,
    onLoginClick,
    locale
  } = useGlobalHeader({
    state: 'loading'
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector as AccountSelectorProps} onLoginClick={onLoginClick} locale={locale} disableAccountSelection />
    </RootProvider>;
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getSyntheticAuthorizedPartiesData(1000);
  const selfAccountUuid = authorizedParties.find(p => p.type === 'Person' || p.type === 'SelfIdentified')?.partyUuid;
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(selfAccountUuid);
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    virtualized: true
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector} />
    </RootProvider>;
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const globalMenu = useGlobalMenu({
    accountId: 'diaspora'
  });
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getSyntheticAuthorizedPartiesData(2);
  const selfAccountUuid = authorizedParties.find(p => p.type === 'Person' || p.type === 'SelfIdentified')?.partyUuid;
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(selfAccountUuid);
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    virtualized: true
  });
  return <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector} />
    </RootProvider>;
}`,...T.parameters?.docs?.source}}};export{H as CompanyAccount,U as DisabledAccountSelection,R as Loading,k as LoadingDisabledAccountSelection,B as LoggedIn,y as Login,x as MenuIsNavigation,w as WithCustomBadge,T as WithShortAccountList,P as WithVirtualizationEnabled,Ve as __namedExportsOrder,We as default};
