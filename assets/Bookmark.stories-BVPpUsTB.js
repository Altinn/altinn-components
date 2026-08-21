import{a7 as o}from"./iframe-BRsjK6zm.js";import{u as S}from"./useProfileLayout-BDhRWgt2.js";import{u as c,B as g}from"./useBookmarks-LPNUmYdo.js";import{L as k}from"./Layout-CPG6ZAlW.js";import{P as x}from"./PageBase-BTZZt6t1.js";import{H as p}from"./Heading-tpemMnuB.js";import{T as b}from"./Toolbar-Ci7GVicL.js";import{B as I}from"./BookmarkModal-DoZRtR9L.js";import{u as h}from"./useInboxLayout-trm18IdZ.js";import{u as f}from"./useAccountMenu-NrrM1c7C.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-D9EGe-Ba.js";import"./Bell-C2791M63.js";import"./Bookmark-oH4vySVx.js";import"./ClockDashed-CKKDaiAk.js";import"./globalMenu-DZUxjr-x.js";import"./PersonCircle-C04XE9w8.js";import"./Buildings2-Dvu3TPos.js";import"./InboxFill-D2CnPzca.js";import"./MenuGrid-cmFcfk3b.js";import"./MagnifyingGlass-Cybsybf0.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-_7IU2-0U.js";import"./Trash-B8s36VDT.js";import"./useLayout-CEIckIg3.js";import"./useLocale-a4HpKZ4A.js";import"./header-WMoKauD3.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D2OP8CpX.js";import"./BookmarkSettingsItem-CpyyXkig.js";import"./QueryLabel-HjdY1XKB.js";import"./Plus-DpGZy_zu.js";import"./SettingsItemBase-2meAm_XM.js";import"./ItemMedia-BuhaiW7f.js";import"./Avatar-CrYVj7lw.js";import"./AvatarGroup-DKDwx9eP.js";import"./ChevronUp-B4spzIlB.js";import"./ChevronDown-kQjoglkI.js";import"./ChevronRight-GPnb-Lf1.js";import"./ItemBase-6wELWcHH.js";import"./ItemLink-CfHLQLAQ.js";import"./ItemControls-DOwQd-aH.js";import"./Badge-BbcJeGFK.js";import"./Tooltip-Bg2GzV5c.js";import"./Typography-BVRUlHaM.js";import"./useHighlightedText-P3be0gWv.js";import"./ContextMenu-CMMvswJT.js";import"./useDropdownMenuController-CBf3Z2H_.js";import"./Dropdown-C5aQ46PU.js";import"./SearchField-DVi64UUy.js";import"./FieldBase-C-kV1fOX.js";import"./Field-COSptDWF.js";import"./Label-DkpDVbDp.js";import"./Input-_uBO5XEg.js";import"./MenuListItem-BiWM2UBU.js";import"./MenuListDivider-zBNVAq_M.js";import"./MenuListHeading-DoVWXZX2.js";import"./MenuItem-CcGRfHNR.js";import"./Checkmark-BGtGEGuc.js";import"./ItemLabel-DL87Mmkd.js";import"./InformationSquare-CJ79Iw8R.js";import"./MenuElipsisHorizontal-DwejWzSi.js";import"./Pencil-BQ48Slda.js";import"./SkipLink-BecwOMmn.js";import"./CookieBanner-BjjsRJIH.js";import"./Banner-oosowav6.js";import"./GlobalHeader-DI7sD759.js";import"./useIsDesktop-3lbmZgtL.js";import"./GlobalAccountButton-csRo9bkD.js";import"./Enter-BOV8ge-G.js";import"./GlobalMenuButton-DSpvP_gz.js";import"./MenuHamburger-CE13cPrY.js";import"./AccountSelector-CaAKvhfi.js";import"./Switch-FM0gdVbC.js";import"./AccountMenu-C2lPWDZG.js";import"./GlobalMenu-Dsw6uNxT.js";import"./ArrowUndo-X6vse5zm.js";import"./Globe-BqtL28OT.js";import"./BreadcrumbsLink-DW0IvuA7.js";import"./ArrowRight-DPf3fQp2.js";import"./Footer-Dk21LuRk.js";import"./Flex-CYDzZKtj.js";import"./ButtonGroup-DZmKTqxp.js";import"./ButtonGroupDivider-BEqVwQCn.js";import"./ChevronUpDown-Brnw9Gdv.js";import"./ToolbarMenu-BvZZFO3z.js";import"./ToolbarSearch-DYmFumaH.js";import"./SettingsModal-BhAlGfSs.js";import"./ModalBody-Cx-bJ05q.js";import"./Section-DAR_XxTX.js";import"./ButtonIcon-CO4iGeIF.js";import"./ButtonLabel-w8kuoY5Z.js";import"./TextField-C6J0EMA9.js";import"./inboxMenu-BdPlKJOk.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const xe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,xe as __namedExportsOrder,ke as default};
