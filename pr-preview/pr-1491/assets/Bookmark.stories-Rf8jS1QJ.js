var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-CZm9Z2L_.js";import{u as j}from"./useProfileLayout-Dj51G8WT.js";import{u as g,B as x}from"./useBookmarks-BNC0tNnT.js";import{L as k}from"./Layout-CvCO9vht.js";import{P as b}from"./PageBase-CjMlIxmj.js";import{H as m}from"./Heading-CGvkj5VV.js";import{T as I}from"./Toolbar-BUJIP-l4.js";import{B as h}from"./BookmarkModal-CUE70zmM.js";import{u as C}from"./useInboxLayout-B2WDET7H.js";import{u as y}from"./useAccountMenu-DC0KMFHI.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DoCB_GBg.js";import"./Bell-DUB8E5rY.js";import"./Bookmark-DKHIVL-x.js";import"./ClockDashed-Dc2AKOfu.js";import"./localeSwitcher-CHBrcsab.js";import"./InboxFill-BUC9Wdwi.js";import"./PersonGroup-B8m6JoNP.js";import"./MenuGrid-lFBl4Ujw.js";import"./MagnifyingGlass-DwPErScE.js";import"./Buildings2-BTINRXJL.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BdlwK_O4.js";import"./Trash-D-r-J8J3.js";import"./useLayout-DYUXqeS5.js";import"./useLocale-lD8VxMFm.js";import"./header-uFVA6_mv.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-czaSJY_k.js";import"./BookmarkSettingsItem-DMosChH6.js";import"./QueryLabel-CMhNYYFg.js";import"./Plus-B_1tuTHV.js";import"./SettingsItemBase-yCvB55PI.js";import"./ItemMedia-CpjA7nnT.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./ChevronUp-CIHpYQBC.js";import"./ChevronDown-Bb4C_BOJ.js";import"./ChevronRight-MmDri0bt.js";import"./ItemBase-CcZPPggP.js";import"./ItemLink-u7oYbdQM.js";import"./ItemControls-1WPti-Pt.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./Typography-99BUGcV3.js";import"./useHighlightedText-0BBntNc4.js";import"./ContextMenu-Bv-2X2Z3.js";import"./useDropdownMenuController-B7YFssqT.js";import"./Dropdown-CjN8UIhd.js";import"./SearchField-Cj8KK4lS.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemLabel-B3mLAUUV.js";import"./FieldBase-BiQdP4ez.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./Input-BcwXpX3S.js";import"./InformationSquare-C62nR7w8.js";import"./Pencil-BErA687C.js";import"./SkipLink-Ccg6Z0HW.js";import"./CookieBanner-CJtaCpSr.js";import"./Link-C11OOuTG.js";import"./Banner-DSEj4-yB.js";import"./GlobalHeader-BfW7ctuA.js";import"./useIsDesktop-IAQovNa1.js";import"./GlobalAccountButton-B5kGcy7l.js";import"./Enter-Bs0dFK5F.js";import"./GlobalMenuButton-PWA8yxnN.js";import"./MenuHamburger-DLVH7hi6.js";import"./AccountSelector-KuPoNuS1.js";import"./Switch-Cf-4wIba.js";import"./AccountMenu-Xa7DSnYy.js";import"./GlobalMenu-KE6BDCkE.js";import"./Checkmark-CAMmZDSe.js";import"./ArrowUndo-Hp57fThJ.js";import"./Globe-CpZCrs52.js";import"./BreadcrumbsLink-BAkwvg6x.js";import"./ArrowRight-Bp4cspyp.js";import"./Footer-D97rfyOA.js";import"./Flex-piEowcmm.js";import"./ButtonGroup-7aJoGw6J.js";import"./ButtonGroupDivider-DVzJfOu7.js";import"./ChevronUpDown-BaBnT4FQ.js";import"./ToolbarMenu-CwvAUbaN.js";import"./ToolbarSearch-DqvVItjt.js";import"./SettingsModal-C4kkBz7a.js";import"./ModalBody-B6uDomnX.js";import"./Section-z-IVKGiV.js";import"./ButtonIcon-C0K5IRwl.js";import"./ButtonLabel-CupeExgA.js";import"./TextField-BDbZi5gp.js";import"./inboxMenu-DaxDIycg.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
