import{a7 as o}from"./iframe-C9sF4CIH.js";import{u as S}from"./useProfileLayout-BdbD_5V8.js";import{u as c,B as g}from"./useBookmarks-BhzQzYbt.js";import{L as k}from"./Layout-DbTMO45R.js";import{P as x}from"./PageBase-Bt9ffUVk.js";import{H as p}from"./Heading-CN6nglwQ.js";import{T as b}from"./Toolbar-Df7j-zdi.js";import{B as I}from"./BookmarkModal-BWxATIUD.js";import{u as h}from"./useInboxLayout-B7O0t1ZQ.js";import{u as f}from"./useAccountMenu-wzAJjP43.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-Cb3oVF8z.js";import"./Bell-BqVP7lkp.js";import"./Bookmark-D-apoPC5.js";import"./ClockDashed-CPjWxQp2.js";import"./globalMenu-BcCM97tn.js";import"./PersonCircle-CFiA3kT9.js";import"./Buildings2-BVBvVxW2.js";import"./InboxFill-Dzk6CpvO.js";import"./MenuGrid-Bw14f0ue.js";import"./MagnifyingGlass-BaBs8vmN.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-C9EZoKY1.js";import"./Trash-DtuzqxyC.js";import"./useLayout-DOSw_16W.js";import"./useLocale-DGlUiOVp.js";import"./header-CrTKR4uu.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BFGedA5y.js";import"./BookmarkSettingsItem-CO_noOgU.js";import"./QueryLabel-BRnURNuR.js";import"./Plus-t80sr0p5.js";import"./SettingsItemBase-kU9_c0w6.js";import"./ItemMedia-Ck6acBMI.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./ChevronUp-Bw8O-5uv.js";import"./ChevronDown-DNNZgNQx.js";import"./ChevronRight-BzqVHEpk.js";import"./ItemBase-CbO6Ng8R.js";import"./ItemLink-LcJuXaju.js";import"./ItemControls-BU12ltKZ.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./Typography-BQsARAdQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./ContextMenu-ZXotIdMM.js";import"./useDropdownMenuController-D4Y6GTjn.js";import"./Dropdown-Bt-2pNLb.js";import"./SearchField-C_Ji_EMe.js";import"./FieldBase-BZH1Lr7P.js";import"./Field-D40vPUUg.js";import"./Label-BQs4ZavD.js";import"./Input-DZS0C5P8.js";import"./MenuListItem-C9rtWM2n.js";import"./MenuListDivider-D0Dk3XM8.js";import"./MenuListHeading-CQYtGjFy.js";import"./MenuItem-DU1kbbfo.js";import"./Checkmark-CL2jgLCm.js";import"./ItemLabel-Cb55IGYj.js";import"./InformationSquare-BmRwhtkQ.js";import"./MenuElipsisHorizontal-BiPwQStA.js";import"./Pencil-Dbe-ud83.js";import"./SkipLink-sR8eN8KA.js";import"./CookieBanner-DRbuFaIU.js";import"./Banner-F9jAQmTH.js";import"./GlobalHeader-9TD58EFb.js";import"./useIsDesktop-Bs_0tRsF.js";import"./GlobalAccountButton-DCNO2xux.js";import"./Enter-DjTqwWlq.js";import"./GlobalMenuButton-DzKVMMYx.js";import"./MenuHamburger-DQqXp455.js";import"./AccountSelector-DPq9TyaQ.js";import"./Switch-DTc2sA6x.js";import"./AccountMenu-KMM-WYh2.js";import"./GlobalMenu-BZdo7Lgm.js";import"./ArrowUndo-BCB2Wpm6.js";import"./Globe-B-4iZdGi.js";import"./BreadcrumbsLink-B_5wbeSS.js";import"./ArrowRight-C_e3H3Ut.js";import"./Footer-D0TOqRi0.js";import"./Flex-DnMHh9vb.js";import"./ButtonGroup-D3X_1KmS.js";import"./ButtonGroupDivider-DlF0tam_.js";import"./ChevronUpDown-DDkBapqN.js";import"./ToolbarMenu-PduLb2J0.js";import"./ToolbarSearch-ChwZbWMZ.js";import"./SettingsModal-Bifh5L4V.js";import"./ModalBody-CtBEkc_A.js";import"./Section-Ca3vkTbM.js";import"./ButtonIcon-D2wF1g1O.js";import"./ButtonLabel-CEN1m5GJ.js";import"./TextField-CXuTUxrC.js";import"./inboxMenu-DwcCjdjg.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
