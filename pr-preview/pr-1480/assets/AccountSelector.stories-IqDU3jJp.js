var L=Object.defineProperty;var n=(t,o)=>L(t,"name",{value:o,configurable:!0});import{a6 as r,x as l,a9 as R}from"./iframe-CqoHfDH7.js";import{A as s}from"./AccountSelector-BvBz0nl7.js";import{b as B,S as w,u as j}from"./useAccountSelectorDemo-Dl93-mxD.js";import{u as F,g as q}from"./accountDataFetchers-ChxvS1cP.js";import{u as C}from"./useGlobalHeader-BIYYAG20.js";import"./preload-helper-Cc2_yIPf.js";import"./SearchField-D-gn40zc.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemMedia-Sf1LoSEA.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ItemLabel-Bv-toCFX.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ChevronRight-jzUrV1wz.js";import"./FieldBase-B4VpsYUB.js";import"./Typography-rh9OwAWr.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./useMenu-DC909dob.js";import"./InformationSquare-B2hWOsOH.js";import"./Switch-C1zqeT7L.js";import"./AccountMenu-Fh_lK1IK.js";import"./useIsDesktop-DOYNI_br.js";import"./name-Dr5DH52l.js";import"./HeartFill-B5r3HVdm.js";import"./useLocale-8rWX-jAY.js";import"./globalMenu-C7MS5dOU.js";import"./PersonCircle-JGJi10OX.js";import"./Buildings2-jiqwiY34.js";import"./InboxFill-CbXG-sfC.js";import"./MenuGrid-CTbcWMRg.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Bookmark-BOLbbqTe.js";import"./Archive-BpmgVQNb.js";import"./Trash-DDnja0xf.js";import"./useAccountMenu-C9Px9FrJ.js";const{expect:e,userEvent:H,waitFor:O,within:E}=__STORYBOOK_MODULE_TEST__,Le={title:"Layout/AccountSelector",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},loading:{control:"boolean"}}},A=n(()=>{const t=C({}).accountSelector;return r.jsx(l,{children:r.jsx(s,{...t})})},"WithAccounts"),v=n(t=>r.jsx(l,{children:r.jsx(s,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),"NoAccounts"),f=n(t=>r.jsx(l,{children:r.jsx(s,{...t,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})}),"Loading"),T=n(({parties:t})=>{const o=j(t);return r.jsx(l,{languageCode:"nb",children:r.jsx(s,{...o})})},"AccountSelectorDemo"),u=n(()=>{const[t,o]=R.useState([]),[d,p]=R.useState(!1),[g,m]=R.useState(w),D=q(),h=F({partyListDTO:D,favoriteAccountUuids:t,onToggleFavorite:n(a=>{o(c=>c.includes(a)?c.filter(P=>P!==a):[...c,a])},"onToggleFavorite"),selfAccountUuid:w,currentAccountUuid:g,onSelectAccount:n(a=>{m(a)},"onSelectAccount"),languageCode:"nb",isLoading:!1,showDeletedUnits:d,onShowDeletedUnitsChange:n(a=>{p(a)},"onShowDeletedUnitsChange")});return r.jsx(l,{languageCode:"nb",children:r.jsx(s,{...h})})},"UsingUseAccountHook"),S=n(()=>r.jsx(T,{parties:B(3)}),"ThreeAccounts"),b=n(()=>r.jsx(T,{parties:B(4,1)}),"FourAccountsOneDeleted"),y=n(()=>r.jsx(T,{parties:B(6,3)}),"SixAccountsThreeDeleted"),x=n(()=>r.jsx(T,{parties:B(10)}),"TenAccountsNoneDeleted"),i={parameters:{screenshot:{skip:!0}},render:n(()=>r.jsx(u,{}),"render"),play:n(async({canvasElement:t})=>{const o=E(t);e(t.querySelectorAll('[role="menu"], [role="menuitem"]')).toHaveLength(0),e(o.getByRole("heading",{level:2})).toBeInTheDocument();const d=o.getAllByRole("heading",{level:3});e(d.length).toBeGreaterThan(0);for(const a of d){const c=a.nextElementSibling;e(c).toHaveAttribute("role","list"),e(c).toHaveAccessibleName(a.textContent??""),e(E(c).getAllByRole("listitem").length).toBeGreaterThan(0)}const p=[...t.querySelectorAll("[data-id]")];e(p.length).toBeGreaterThan(0);for(const a of p)e(a.tagName).toBe("BUTTON");e(t.querySelectorAll("button button")).toHaveLength(0),e(t.querySelector('[aria-current="true"]')).toBeInTheDocument();const g=o.getAllByRole("button",{name:/legg til i favoritt/i})[0],m=g.closest("li")?.querySelector("[data-id]");e(g).toHaveAccessibleName(e.stringContaining(`: ${m.getAttribute("aria-label")}`)),e(m).toHaveAccessibleDescription(e.stringMatching(/\S/));const D=t.querySelector('[aria-current="true"]')?.getAttribute("aria-label"),U=o.queryAllByRole("button",{name:/fjern fr[aå] favoritt/i}).length;await H.click(o.getAllByRole("button",{name:/legg til i favoritt/i})[0]),await o.findAllByRole("button",{name:/fjern fr[aå] favoritt/i}),e(o.getAllByRole("button",{name:/fjern fr[aå] favoritt/i}).length).toBeGreaterThan(U),e(t.querySelector('[aria-current="true"]')?.getAttribute("aria-label")).toBe(D);const h=o.getByRole("status");e(h).toBeEmptyDOMElement(),await H.type(o.getByRole("searchbox"),"a"),await O(()=>e(h).toHaveTextContent(/treff/)),e(o.getAllByRole("status")).toHaveLength(1),e(o.queryAllByRole("heading",{level:3})).toHaveLength(0)},"play")},je=["WithAccounts","NoAccounts","Loading","UsingUseAccountHook","ThreeAccounts","FourAccountsOneDeleted","SixAccountsThreeDeleted","TenAccountsNoneDeleted","ListOfAccounts"];A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;
  return <RootProvider>
      <AccountSelector {...accountSelector} />
    </RootProvider>;
}`,...A.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} />
    </RootProvider>;
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} loading />
    </RootProvider>;
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(3)} />",...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(4, 1)} />",...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(6, 3)} />",...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"() => <AccountSelectorDemo parties={buildAuthorizedParties(10)} />",...x.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"The accounts are a plain list: headings for the groups, and two buttons per account.",...i.parameters?.docs?.description}}};export{b as FourAccountsOneDeleted,i as ListOfAccounts,f as Loading,v as NoAccounts,y as SixAccountsThreeDeleted,x as TenAccountsNoneDeleted,S as ThreeAccounts,u as UsingUseAccountHook,A as WithAccounts,je as __namedExportsOrder,Le as default};
