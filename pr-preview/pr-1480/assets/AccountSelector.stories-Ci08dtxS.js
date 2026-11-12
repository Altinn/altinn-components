var F=Object.defineProperty;var n=(t,o)=>F(t,"name",{value:o,configurable:!0});import{a7 as r,x as m,aa as D}from"./iframe-D6r7-MD4.js";import{A as s}from"./AccountSelector-C_iWFF6J.js";import{b as T,S as L,u as P}from"./useAccountSelectorDemo-Df-Ybd9g.js";import{u as N,g as q}from"./accountDataFetchers-BI3Qt_nr.js";import{u as M}from"./useGlobalHeader-Cb6spSXC.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-xJmrCU7q.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemMedia-CeccNKOc.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./ItemLabel-CjCW6exE.js";import"./Heading-BBX9eyEy.js";import"./useHighlightedText-ByiYciR_.js";import"./ItemControls-Cgg9ynEC.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./ChevronRight-B-ItEsH6.js";import"./FieldBase-BsGJArhX.js";import"./Typography-CHbDBJK8.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./Input-CtcmBtOO.js";import"./useMenu-BVbqxAfY.js";import"./InformationSquare-Rb80un_D.js";import"./Switch-Tw7A9AdD.js";import"./AccountMenu-B-JRC4BL.js";import"./useIsDesktop-EdoKGz01.js";import"./name-Dr5DH52l.js";import"./HeartFill-6Q0CsPxj.js";import"./useLocale-CX_k4MBF.js";import"./globalMenu-B8vVdqli.js";import"./PersonCircle-BedPTAn8.js";import"./Buildings2-LPZcIjTE.js";import"./InboxFill-8qZ2EuaI.js";import"./MenuGrid-BnpoElgk.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-DXFZnfLO.js";import"./Archive-BY-3YmHS.js";import"./Trash-DWkOlGVD.js";import"./useAccountMenu-DNv1VH71.js";const{expect:e,userEvent:v,waitFor:U,within:j}=__STORYBOOK_MODULE_TEST__,Fe={title:"Layout/AccountSelector",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},loading:{control:"boolean"}}},f=n(()=>{const t=M({}).accountSelector;return r.jsx(m,{children:r.jsx(s,{...t})})},"WithAccounts"),b=n(t=>r.jsx(m,{children:r.jsx(s,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),S=n(t=>r.jsx(m,{children:r.jsx(s,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),R=n(({parties:t})=>{const o=P(t);return r.jsx(m,{languageCode:"nb",children:r.jsx(s,{...o})})},"AccountSelectorDemo"),g=n(()=>{const[t,o]=D.useState([]),[p,h]=D.useState(!1),[i,u]=D.useState(L),A=q(),E=N({partyListDTO:A,favoriteAccountUuids:t,onToggleFavorite:n(a=>{o(c=>c.includes(a)?c.filter(l=>l!==a):[...c,a])},"onToggleFavorite"),selfAccountUuid:L,currentAccountUuid:i,onSelectAccount:n(a=>{u(a)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:p,onShowDeletedUnitsChange:n(a=>{h(a)},"onShowDeletedUnitsChange")});return r.jsx(m,{languageCode:"nb",children:r.jsx(s,{...E})})},"UsingUseAccountHook"),x=n(()=>r.jsx(R,{parties:T(3)}),"ThreeAccounts"),y=n(()=>r.jsx(R,{parties:T(4,1)}),"FourAccountsOneDeleted"),B=n(()=>r.jsx(R,{parties:T(6,3)}),"SixAccountsThreeDeleted"),w=n(()=>r.jsx(R,{parties:T(10)}),"TenAccountsNoneDeleted"),d={parameters:{screenshot:{skip:!0}},render:n(()=>r.jsx(g,{}),"render"),play:n(async({canvasElement:t})=>{const o=j(t);e(t.querySelectorAll('[role="menu"], [role="menuitem"]')).toHaveLength(0),e(o.getByRole("heading",{level:2})).toBeInTheDocument();const p=o.getAllByRole("heading",{level:3});e(p.length).toBeGreaterThan(0);for(const c of p){const l=c.nextElementSibling;e(l).toHaveAttribute("role","list"),e(l).toHaveAccessibleName(c.textContent??""),e(j(l).getAllByRole("listitem").length).toBeGreaterThan(0)}const h=[...t.querySelectorAll("[data-id]")];e(h.length).toBeGreaterThan(0);for(const c of h)e(c.tagName).toBe("BUTTON");e(t.querySelectorAll("button button")).toHaveLength(0),e(t.querySelector('[aria-current="true"]')).toBeInTheDocument();const i=o.getAllByRole("button",{name:/legg til i favoritt/i})[0],u=i.closest("li")?.querySelector("[data-id]");e(i).toHaveAccessibleName(e.stringContaining(`: ${u.getAttribute("aria-label")}`)),e(u).toHaveAccessibleDescription(e.stringMatching(/\S/));const A=u.getAttribute("aria-label");await v.click(i),await U(()=>e(document.activeElement).toHaveAccessibleName(e.stringMatching(new RegExp(`^Fjern fra favoritter: ${A}$`)))),await v.keyboard("{Enter}"),await U(()=>e(document.activeElement).toHaveAccessibleName(e.stringMatching(new RegExp(`^Legg til i favoritter: ${A}$`))));const H=t.querySelector('[aria-current="true"]')?.getAttribute("aria-label"),E=o.queryAllByRole("button",{name:/fjern fr[aå] favoritt/i}).length;await v.click(o.getAllByRole("button",{name:/legg til i favoritt/i})[0]),await o.findAllByRole("button",{name:/fjern fr[aå] favoritt/i}),e(o.getAllByRole("button",{name:/fjern fr[aå] favoritt/i}).length).toBeGreaterThan(E),e(t.querySelector('[aria-current="true"]')?.getAttribute("aria-label")).toBe(H);const a=o.getByRole("status");e(a).toBeEmptyDOMElement(),await v.type(o.getByRole("searchbox"),"a"),await U(()=>e(a).toHaveTextContent(/treff/)),e(o.getAllByRole("status")).toHaveLength(1),e(o.queryAllByRole("heading",{level:3})).toHaveLength(0)},"play")},Pe=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted","ListOfAccounts"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;
  return <RootProvider>
      <AccountSelector {...accountSelector} />
    </RootProvider>;
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} />
    </RootProvider>;
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} loading />
    </RootProvider>;
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_PARTY_UUID);
  const authorizedParties = getAuthorizedPartiesData();
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids(prev => prev.includes(uuid) ? prev.filter(id => id !== uuid) : [...prev, uuid]);
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_PARTY_UUID,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    showDeletedUnits: showDeletedAccounts,
    onShowDeletedUnitsChange: (newValue: boolean) => {
      setShowDeletedAccounts(newValue);
    }
  });
  return <RootProvider languageCode="nb">
      <AccountSelector {...accountSelector} />
    </RootProvider>;
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(3)} />",...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(4, 1)} />",...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(6, 3)} />",...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(10)} />",...w.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // Behaviour only, the look is covered by the stories above.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <UsingUseAccountHook />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);

    // Nothing is a menu.
    expect(canvasElement.querySelectorAll('[role="menu"], [role="menuitem"]')).toHaveLength(0);

    // Each group title is a heading, one level below the selector's own, followed by the list it names.
    expect(canvas.getByRole('heading', {
      level: 2
    })).toBeInTheDocument();
    const groupHeadings = canvas.getAllByRole('heading', {
      level: 3
    });
    expect(groupHeadings.length).toBeGreaterThan(0);
    for (const heading of groupHeadings) {
      const list = heading.nextElementSibling as HTMLElement;
      expect(list).toHaveAttribute('role', 'list');
      expect(list).toHaveAccessibleName(heading.textContent ?? '');
      expect(within(list).getAllByRole('listitem').length).toBeGreaterThan(0);
    }

    // An account is a button. Its favourite toggle is a button beside it, never inside it.
    const accounts = [...canvasElement.querySelectorAll('[data-id]')];
    expect(accounts.length).toBeGreaterThan(0);
    for (const account of accounts) {
      expect(account.tagName).toBe('BUTTON');
    }
    expect(canvasElement.querySelectorAll('button button')).toHaveLength(0);
    expect(canvasElement.querySelector('[aria-current="true"]')).toBeInTheDocument();

    // The favourite button says which account it is for, and the account's description is read after its name.
    const firstFavourite = canvas.getAllByRole('button', {
      name: /legg til i favoritt/i
    })[0];
    const itsAccount = firstFavourite.closest('li')?.querySelector('[data-id]') as HTMLElement;
    expect(firstFavourite).toHaveAccessibleName(expect.stringContaining(\`: \${itsAccount.getAttribute('aria-label')}\`));
    expect(itsAccount).toHaveAccessibleDescription(expect.stringMatching(/\\S/));

    // Focus follows the account into the favourites, instead of landing on the next account's button.
    const accountName = itsAccount.getAttribute('aria-label') as string;
    await userEvent.click(firstFavourite);
    await waitFor(() => expect(document.activeElement).toHaveAccessibleName(expect.stringMatching(new RegExp(\`^Fjern fra favoritter: \${accountName}$\`))));
    // And back again when it is removed.
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(document.activeElement).toHaveAccessibleName(expect.stringMatching(new RegExp(\`^Legg til i favoritter: \${accountName}$\`))));

    // Toggling a favourite does not pick the account. It adds it to the favourites.
    const currentBefore = canvasElement.querySelector('[aria-current="true"]')?.getAttribute('aria-label');
    const favouritesBefore = canvas.queryAllByRole('button', {
      name: /fjern fr[aå] favoritt/i
    }).length;
    await userEvent.click(canvas.getAllByRole('button', {
      name: /legg til i favoritt/i
    })[0]);
    await canvas.findAllByRole('button', {
      name: /fjern fr[aå] favoritt/i
    });
    expect(canvas.getAllByRole('button', {
      name: /fjern fr[aå] favoritt/i
    }).length).toBeGreaterThan(favouritesBefore);
    expect(canvasElement.querySelector('[aria-current="true"]')?.getAttribute('aria-label')).toBe(currentBefore);

    // The status region for the number of hits is in the page from the start, so the first change is announced.
    const status = canvas.getByRole('status');
    expect(status).toBeEmptyDOMElement();

    // Searching replaces the groups with one list. The number of hits is announced, and shown as plain text.
    await userEvent.type(canvas.getByRole('searchbox'), 'a');
    await waitFor(() => expect(status).toHaveTextContent(/treff/));
    expect(canvas.getAllByRole('status')).toHaveLength(1);
    expect(canvas.queryAllByRole('heading', {
      level: 3
    })).toHaveLength(0);
  }
}`,...d.parameters?.docs?.source},description:{story:"The accounts are a plain list: headings for the groups, and two buttons per account.",...d.parameters?.docs?.description}}};export{y as FourAccountsOneDeleted,d as ListOfAccounts,S as Loading,b as NoAccounts,B as SixAccountsThreeDeleted,w as TenAccountsNoneDeleted,x as ThreeAccounts,g as UsingUseAccountHook,f as WithAccounts,Pe as __namedExportsOrder,Fe as default};
