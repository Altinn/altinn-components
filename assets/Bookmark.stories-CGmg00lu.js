var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-DV7mfmQb.js";import{u as j}from"./useProfileLayout-BSkvo_5t.js";import{u as g,B as x}from"./useBookmarks-wuqoKg4Y.js";import{L as k}from"./Layout-BK0w3PMD.js";import{P as b}from"./PageBase-Xt83nKDp.js";import{H as m}from"./Heading-qQ_NecB3.js";import{T as I}from"./Toolbar-C4kXD3ZP.js";import{B as h}from"./BookmarkModal-CSJsn_uy.js";import{u as C}from"./useInboxLayout-D8G5bwrX.js";import{u as y}from"./useAccountMenu-BwLt8TWy.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DOapQs-H.js";import"./Bell-BATRPhhH.js";import"./Bookmark-DA6gE_Tg.js";import"./ClockDashed-wGGaML0N.js";import"./globalMenu-CpRGNqVy.js";import"./PersonCircle-_T27UUZ-.js";import"./Buildings2-CeZxpCtB.js";import"./InboxFill-BvLcyoSs.js";import"./MenuGrid-DRVrG73C.js";import"./MagnifyingGlass-B1ufIXT-.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-PXBTQ8NB.js";import"./Trash-C1yoK2W5.js";import"./useLayout-DdknUL0l.js";import"./useLocale-BFesZEMO.js";import"./header-DHMJJ7gv.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BFlkLZpJ.js";import"./BookmarkSettingsItem-7XSL_9cF.js";import"./QueryLabel-Cj9siz0V.js";import"./Plus-sUzSSeT3.js";import"./SettingsItemBase-COVJBOeY.js";import"./ItemMedia-CxtJxXCZ.js";import"./Avatar-DCtpkPNs.js";import"./AvatarGroup-DkZdjAob.js";import"./ChevronUp-DkTvQyLF.js";import"./ChevronDown-M6oDtO0s.js";import"./ChevronRight-y8OcgkDI.js";import"./ItemBase-bFDQRcxo.js";import"./ItemLink-BKByZLmO.js";import"./ItemControls-DXTFa1Wt.js";import"./Badge-DzF_wXJq.js";import"./Tooltip-Dnt3MX0-.js";import"./Typography-DQaNXpVK.js";import"./useHighlightedText-DBlSdXli.js";import"./ContextMenu-B5CXTleL.js";import"./useDropdownMenuController-D9bRT85Q.js";import"./Dropdown-B1DFc__X.js";import"./SearchField-DyUxixY-.js";import"./MenuListItem-BNAb4_WQ.js";import"./MenuListDivider-uDPIzbn6.js";import"./MenuItem-_arBrpFq.js";import"./CheckboxUncheckedIcon-W9wh7zhg.js";import"./RadioUncheckedIcon-DHe0o4Rd.js";import"./ItemLabel-DhOVpPar.js";import"./FieldBase-BPbtcuhV.js";import"./Field-xCImHJHX.js";import"./Label-CBFOmf2H.js";import"./Input-C3PsoH0G.js";import"./InformationSquare-Z-eNQMTk.js";import"./Pencil-DZXooZR4.js";import"./SkipLink-DWhpD2JE.js";import"./CookieBanner-DIELrxAP.js";import"./Link-td4tSMf0.js";import"./Banner-BYfqFn6r.js";import"./GlobalHeader-DXyqSPVs.js";import"./useIsDesktop-DCLIk5lP.js";import"./GlobalAccountButton-CxEaXp2V.js";import"./Enter-v_RE-Mu9.js";import"./GlobalMenuButton-BQS4sS8d.js";import"./MenuHamburger-CxPazaXX.js";import"./AccountSelector-BHau9V2C.js";import"./Switch-DNLwrdXr.js";import"./AccountMenu-DM2EBnSH.js";import"./GlobalMenu-Qbd1zlxn.js";import"./Checkmark-B-M1QuTd.js";import"./ArrowUndo-m6YZv1rE.js";import"./Globe-DaOEOAky.js";import"./BreadcrumbsLink-CBwmeyQz.js";import"./ArrowRight-C_osjboa.js";import"./Footer-BiqT7Jqb.js";import"./Flex-DFf5qQ3F.js";import"./ButtonGroup-D14KKgW3.js";import"./ButtonGroupDivider-DTJble5I.js";import"./ChevronUpDown-DwYyKbBn.js";import"./ToolbarMenu-pJ0wy_3D.js";import"./ToolbarSearch-DxZ7FheP.js";import"./SettingsModal-CdI5wiK5.js";import"./ModalBody-33j9noUT.js";import"./Section-BXLF8mP1.js";import"./ButtonIcon-DlYSIism.js";import"./ButtonLabel-BoFyGOO4.js";import"./TextField-BMcHuUVO.js";import"./inboxMenu-yKL_DE72.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
