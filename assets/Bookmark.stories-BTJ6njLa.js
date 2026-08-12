import{a7 as o}from"./iframe-CeD8DZF_.js";import{u as S}from"./useProfileLayout-j-EfMP-L.js";import{u as c,B as g}from"./useBookmarks-B-bAl1iV.js";import{L as k}from"./Layout-CIjwcIba.js";import{P as x}from"./PageBase-PRLf88Ps.js";import{H as p}from"./Heading-CqEhdWlY.js";import{T as b}from"./Toolbar-KphS47Kc.js";import{B as I}from"./BookmarkModal-BgwJx50z.js";import{u as h}from"./useInboxLayout-B8iksOtc.js";import{u as f}from"./useAccountMenu-O9W1mag3.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-Cs4AGepw.js";import"./Bell-BPsDKzao.js";import"./Bookmark-C69DWwR5.js";import"./ClockDashed-iUB0Wgbc.js";import"./globalMenu-B9dDwuMR.js";import"./PersonCircle-zHDRbj0E.js";import"./Buildings2-BA18tGco.js";import"./InboxFill-CV3pJzk9.js";import"./MenuGrid-CY-CpihY.js";import"./MagnifyingGlass-DbRqyBnQ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BtIL4-pG.js";import"./Trash-YA0mygsZ.js";import"./useLayout-Bgrn8336.js";import"./useLocale-6RmjaUqZ.js";import"./header-Sl1oj08R.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Cr0Tzvrf.js";import"./BookmarkSettingsItem-pHBwtrfb.js";import"./QueryLabel-DNTlg9WW.js";import"./Plus-StvQ1Urq.js";import"./SettingsItemBase-G5kM6T3P.js";import"./ItemMedia-CjD5QxWk.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./ChevronUp-CcrHqtW6.js";import"./ChevronDown-y5t2TNH2.js";import"./ChevronRight-B8wcZ9md.js";import"./ItemBase-BBKknlL_.js";import"./ItemLink-DvfF8HnK.js";import"./ItemControls-CphkAdhU.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./Typography-D10BEJyK.js";import"./useHighlightedText-qfj7RnMw.js";import"./ContextMenu-Civ_gyCw.js";import"./useDropdownMenuController-D9gVQRIM.js";import"./Dropdown-gDr2Qds9.js";import"./SearchField-D9P8-rjO.js";import"./FieldBase-BbgmrWIh.js";import"./Field-DdzYX5Hl.js";import"./Label-DgGQ1tMX.js";import"./Input-B6Hxr8dW.js";import"./MenuListItem-dRCDziUR.js";import"./MenuListDivider-CA69mol6.js";import"./MenuListHeading-C1lg1_sH.js";import"./MenuItem-D5qCw848.js";import"./Checkmark-C90PiZqs.js";import"./ItemLabel-CBqRB1sq.js";import"./InformationSquare-CNpr0xiM.js";import"./MenuElipsisHorizontal-DxLx2qOI.js";import"./Pencil-CkoadffO.js";import"./SkipLink-CuhBaYcN.js";import"./Banner-Db1gRFD-.js";import"./GlobalHeader-C9vBsP0x.js";import"./useIsDesktop-ClFmcpth.js";import"./GlobalAccountButton-wEyxwdUc.js";import"./Enter-C_HHSuUn.js";import"./GlobalMenuButton-Bf81O9iC.js";import"./MenuHamburger-5i5jT7Mb.js";import"./AccountSelector-CUefH3va.js";import"./Switch-BPi0Tt-y.js";import"./AccountMenu-BRpxa_gO.js";import"./GlobalMenu-BcMHIVXZ.js";import"./ArrowUndo-CY16ifDv.js";import"./Globe-XElHabot.js";import"./BreadcrumbsLink-J5lk5-3z.js";import"./ArrowRight-BPk6hCSQ.js";import"./Footer-Z2XHXSO9.js";import"./Flex-BOkBPJQr.js";import"./ButtonGroup-C3-Lq824.js";import"./ButtonGroupDivider-NSvDX-n9.js";import"./ChevronUpDown-DlSnRGyJ.js";import"./ToolbarMenu-XloUNX45.js";import"./ToolbarSearch-C9iC4-kO.js";import"./SettingsModal-DO2hkuYe.js";import"./ModalBody-B4hCRN8z.js";import"./Section-18Uf7Mat.js";import"./ButtonIcon-C0Csvo29.js";import"./ButtonLabel-BzOdEbMB.js";import"./TextField-WBCoU1O_.js";import"./inboxMenu-kTKgDOfn.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
