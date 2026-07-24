import{a7 as o}from"./iframe-Byxtd80g.js";import{u as S}from"./useProfileLayout-BH-GWkAF.js";import{u as c,B as g}from"./useBookmarks-Uqg3EuO3.js";import{L as k}from"./Layout-CiO1zpji.js";import{P as x}from"./PageBase-H0a7y6DZ.js";import{H as p}from"./Heading-MBvMqbLo.js";import{T as b}from"./Toolbar-p-vHRlWD.js";import{B as I}from"./BookmarkModal-CZUsMr5_.js";import{u as h}from"./useInboxLayout-Cgfv4PXI.js";import{u as f}from"./useAccountMenu-Dd9y_0Mc.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-M1FbN85e.js";import"./Bell-C0dVVEnv.js";import"./Bookmark-CcRZkTPq.js";import"./ClockDashed-CUKZ9Cab.js";import"./globalMenu-DZ-KsvQ4.js";import"./PersonCircle-D7O4OnpB.js";import"./Buildings2-DE1ScjU0.js";import"./InboxFill-DI4oJ5bC.js";import"./MenuGrid-DKOA70_A.js";import"./MagnifyingGlass-DByXWuC9.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DN9JKnJD.js";import"./Trash-LkpJF2Ft.js";import"./useLayout-BjZU5M6X.js";import"./useLocale-BGGeziRV.js";import"./header-DcpQUYH2.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-ClfrC7iO.js";import"./BookmarkSettingsItem-BSWlouJn.js";import"./QueryLabel-DnOFkVTS.js";import"./Plus-Baef_WWy.js";import"./SettingsItemBase-2DYeJ-V9.js";import"./ItemMedia-DRrUuj39.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./ChevronUp-DVYZxjEC.js";import"./ChevronDown-Bl8PHeKm.js";import"./ChevronRight-Cr__dFRw.js";import"./ItemBase-qkA6J1-6.js";import"./ItemLink-C9iiSAim.js";import"./ItemControls-DrAhbY6n.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./Typography-B9U7pBH4.js";import"./useHighlightedText-Cf3y_8YK.js";import"./ContextMenu-Dlglwr41.js";import"./useDropdownMenuController-Ci6S68lA.js";import"./Dropdown-BDuW_1gv.js";import"./SearchField-BrxR5w_Y.js";import"./FieldBase-BpV90x03.js";import"./Field-D8NU1WP1.js";import"./Label-BN9gSRd7.js";import"./Input-De6ZM0cy.js";import"./MenuListItem-rQlT5DX8.js";import"./MenuListDivider-CDp90hQ9.js";import"./MenuListHeading-laWT1ysP.js";import"./MenuItem-BIjlfqyX.js";import"./Checkmark-oERC_EvH.js";import"./ItemLabel--xs2hbXq.js";import"./InformationSquare-CfrYT55Z.js";import"./MenuElipsisHorizontal-DpIat2lo.js";import"./Pencil-CQNmJx2T.js";import"./SkipLink-BUWYdX92.js";import"./Banner-Ddc-tGxp.js";import"./GlobalHeader-DWsMWGtk.js";import"./useIsDesktop-CYSB9jRz.js";import"./GlobalAccountButton-CNkq2zuz.js";import"./Enter-DFJxMCsB.js";import"./GlobalMenuButton-BdMc7Jix.js";import"./MenuHamburger-Djtct37j.js";import"./AccountSelector-CBY95elg.js";import"./Switch-DoXdTS8C.js";import"./AccountMenu-BjXJgVD2.js";import"./GlobalMenu-C4_99jMK.js";import"./ArrowUndo-gwde95g9.js";import"./Globe-Bz6a-Y3A.js";import"./BreadcrumbsLink-BmWUVzBP.js";import"./ArrowRight-CAGT-3Md.js";import"./Footer-BqZStntt.js";import"./Flex-DvsQk1i3.js";import"./ButtonGroup-DCrOTCLv.js";import"./ButtonGroupDivider-Bm1ON_jD.js";import"./ChevronUpDown-CEdUpTfr.js";import"./ToolbarMenu-BlHb-4HL.js";import"./ToolbarSearch-CEPHdN_N.js";import"./SettingsModal-WDsBlCXN.js";import"./ModalBody-Cv8Rj8gS.js";import"./Section-BiXimCdL.js";import"./ButtonIcon-CXrG2Sb4.js";import"./ButtonLabel-7acsPO9C.js";import"./TextField-WU3s1dS7.js";import"./inboxMenu-CRpvg39h.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
        <Heading size="xl">Bokmerker</Heading>
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
}`,...u.parameters?.docs?.source}}};const ke=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ke as __namedExportsOrder,ge as default};
