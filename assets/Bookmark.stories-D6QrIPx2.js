import{a7 as o}from"./iframe-B1m5YS-z.js";import{u as S}from"./useProfileLayout-COMKZ0Oe.js";import{u as c,B as g}from"./useBookmarks-DB54d4VN.js";import{L as k}from"./Layout-DzzYkvFN.js";import{P as x}from"./PageBase-UG-d2XJ_.js";import{H as p}from"./Heading-Bdg559v2.js";import{T as b}from"./Toolbar-CuAz5sVZ.js";import{B as I}from"./BookmarkModal-CnDgxm59.js";import{u as h}from"./useInboxLayout-2iRjQ86C.js";import{u as f}from"./useAccountMenu-DKP_rPhI.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CsIEHATU.js";import"./Bell-B8gJgE1j.js";import"./Bookmark-DebNeJyz.js";import"./ClockDashed-CXLW4ZMs.js";import"./globalMenu-BSHnE4aS.js";import"./PersonCircle-DWnFNzO_.js";import"./Buildings2-1AR-0joq.js";import"./InboxFill-DmCY7Dp2.js";import"./MenuGrid-8HcQWZT2.js";import"./MagnifyingGlass-DOC044bk.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-D_fmO7qk.js";import"./Trash-B-BtPZD_.js";import"./useLayout-_whwVbca.js";import"./useLocale-D3kUlzsZ.js";import"./header-BUIVm5Gk.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bzazr0mK.js";import"./BookmarkSettingsItem-BHb4DzUF.js";import"./QueryLabel-BfRQ1dHJ.js";import"./Plus-yML150nC.js";import"./SettingsItemBase-DFSvstNB.js";import"./ItemMedia-CbRgbp9l.js";import"./Avatar-Xyg1H9P0.js";import"./AvatarGroup-DadNExt3.js";import"./ChevronUp-DD0NwdAM.js";import"./ChevronDown-VNvIPDL4.js";import"./ChevronRight-JufomwYQ.js";import"./ItemBase-CK4FMGcd.js";import"./ItemLink-CGjdbANg.js";import"./ItemControls-DSpZnzMx.js";import"./Badge-D748IrqG.js";import"./Tooltip-3MKLVI5w.js";import"./Typography-D-hgdwYf.js";import"./useHighlightedText-BJ6Snog5.js";import"./ContextMenu-DB8mRJHE.js";import"./useDropdownMenuController-C9-W595w.js";import"./Dropdown-cC7dM-DJ.js";import"./SearchField-txQSfSgU.js";import"./FieldBase-DF02WocK.js";import"./Field-3FnhLs8Z.js";import"./Label-Cd3ICTIz.js";import"./Input-DTp0ac3P.js";import"./MenuListItem-ePeSws84.js";import"./MenuListDivider-l5hHlt1S.js";import"./MenuListHeading-BVCzBY5R.js";import"./MenuItem-D8A8Uy-E.js";import"./Checkmark-O1YGJ3w1.js";import"./ItemLabel-CGVzYdTz.js";import"./InformationSquare-CbKMIE6G.js";import"./MenuElipsisHorizontal-foXznjOs.js";import"./Pencil-DXddgHqS.js";import"./SkipLink-BMkc-XIH.js";import"./CookieBanner-CP-XDUDx.js";import"./Banner-BaHCwq9a.js";import"./GlobalHeader-DteApejV.js";import"./useIsDesktop-qlNRkhP-.js";import"./GlobalAccountButton-DyKdbs9d.js";import"./Enter-CQoyFxIR.js";import"./GlobalMenuButton--22YmBty.js";import"./MenuHamburger-J5IpwwPp.js";import"./AccountSelector-COtL-r3p.js";import"./Switch-Cqc-6BhM.js";import"./AccountMenu-CNzrFvkn.js";import"./GlobalMenu-D497HZpV.js";import"./ArrowUndo-BPOEUuun.js";import"./Globe-DqsoLw-O.js";import"./BreadcrumbsLink-yCWs0BDr.js";import"./ArrowRight-CQBfMp8o.js";import"./Footer-gxxD47Ip.js";import"./Flex-ChmU5Mgr.js";import"./ButtonGroup-K8bkOi3q.js";import"./ButtonGroupDivider-D__YWNER.js";import"./ChevronUpDown-DM35aNN9.js";import"./ToolbarMenu-hf7W5wCR.js";import"./ToolbarSearch-B-1oJTYr.js";import"./SettingsModal-BcCqtHIO.js";import"./ModalBody-ByLHH82k.js";import"./Section-BpRK9CgH.js";import"./ButtonIcon-u2Ofnhum.js";import"./ButtonLabel-B0ghZbJS.js";import"./TextField-DUJ3VIRd.js";import"./inboxMenu-CECemFQ7.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
