var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-DS_59AwM.js";import{u as j}from"./useProfileLayout-DBsA1fGB.js";import{u as g,B as x}from"./useBookmarks-dvbAfw--.js";import{L as k}from"./Layout-C4w8Gd3e.js";import{P as b}from"./PageBase-YImES81T.js";import{H as m}from"./Heading-BZMLDowx.js";import{T as I}from"./Toolbar-CBHk8fKa.js";import{B as h}from"./BookmarkModal-U1w0chHy.js";import{u as C}from"./useInboxLayout-CF55LnYM.js";import{u as y}from"./useAccountMenu-CiqfZgO1.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-BrIW_AfX.js";import"./Bell-DULJ5NX_.js";import"./Bookmark-C5zK9N2t.js";import"./ClockDashed-CJPcObAR.js";import"./globalMenu-DFBTjtgP.js";import"./PersonCircle-DSk0oNxz.js";import"./Buildings2-csFrmVqP.js";import"./InboxFill-BFZrrmB7.js";import"./MenuGrid-BViEhOfD.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BRmXGBJj.js";import"./Trash-CqvnIlMZ.js";import"./useLayout-xnkjj_-v.js";import"./useLocale-D_2mvdEX.js";import"./header-cIQVq8Pp.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-30LDsNSn.js";import"./BookmarkSettingsItem-Dj4F_YdL.js";import"./QueryLabel-C07oFlTP.js";import"./Plus-Wv8vH7eI.js";import"./SettingsItemBase-8GjNQu7K.js";import"./ItemMedia-CcjWIfuL.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./ChevronUp-DZ6JxO9u.js";import"./ChevronDown-CX1A4zpd.js";import"./ChevronRight-C7PJPgHr.js";import"./ItemBase-BrUL2VDB.js";import"./ItemLink-BrauzxFU.js";import"./ItemControls-C2ZClT3B.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./Typography-DXt4lEYU.js";import"./useHighlightedText-Ba9mKwdy.js";import"./ContextMenu-CCNpCnhA.js";import"./useDropdownMenuController--fJTxwjL.js";import"./Dropdown-DLABBFh7.js";import"./SearchField-CAjTntqL.js";import"./MenuListItem-DwlAJFdA.js";import"./MenuListDivider-CucqnGV5.js";import"./MenuItem-Y-AEUpRl.js";import"./CheckboxUncheckedIcon-C7ZL4zpD.js";import"./RadioUncheckedIcon-B7iKOFAO.js";import"./ItemLabel-DXVwsqWf.js";import"./FieldBase-Bv1sQ0dY.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Input-3GNdcrOi.js";import"./InformationSquare-DyP2GK92.js";import"./Pencil-BLa1rMHz.js";import"./SkipLink-B4jp4en8.js";import"./CookieBanner-D62zvcoE.js";import"./Link-DluIdYG0.js";import"./Banner-CrFenHoT.js";import"./GlobalHeader-qSkTlajx.js";import"./useIsDesktop-BLNCbIMG.js";import"./GlobalAccountButton-B87x-cA4.js";import"./Enter-BzYlsRS4.js";import"./GlobalMenuButton-DtJCYos4.js";import"./MenuHamburger-D2t_fJxS.js";import"./AccountSelector-DeuKRwyu.js";import"./Switch-UOM24JjQ.js";import"./AccountMenu-0gBoOXlr.js";import"./GlobalMenu-B_WcCU9L.js";import"./Checkmark-zqsIpaA_.js";import"./ArrowUndo-D5XHMjLO.js";import"./Globe-CZo01Odx.js";import"./BreadcrumbsLink-DdcZo00M.js";import"./ArrowRight-DdOKe7Au.js";import"./Footer-C6E5xA_w.js";import"./Flex-kHR-J2An.js";import"./ButtonGroup-BVrUrJIV.js";import"./ButtonGroupDivider-Czy_Xe9X.js";import"./ChevronUpDown-Da8Bwm0T.js";import"./ToolbarMenu-DMWHt_Zt.js";import"./ToolbarSearch-CwaReUlv.js";import"./SettingsModal-C-3qMdZ6.js";import"./ModalBody-DwWBi8_C.js";import"./Section-C50awZDU.js";import"./ButtonIcon-DfIk3itr.js";import"./ButtonLabel-CM1BrYjJ.js";import"./TextField-D4axFbpH.js";import"./inboxMenu-D_lHqsJY.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
