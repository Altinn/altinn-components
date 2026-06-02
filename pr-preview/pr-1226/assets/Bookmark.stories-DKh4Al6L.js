import{a7 as o}from"./iframe-Ci8DJ-6R.js";import{u as S}from"./useProfileLayout-CekwzkGM.js";import{u as c,B as g}from"./useBookmarks-Dk3mW6TJ.js";import{L as k}from"./Layout-EZqSkW4f.js";import{P as x}from"./PageBase-Oi4px-rg.js";import{H as p}from"./Heading-CWZTf72r.js";import{T as b}from"./Toolbar-Buvwt5DY.js";import{B as I}from"./BookmarkModal-DFod5_df.js";import{u as h}from"./useInboxLayout-acWZpIAV.js";import{u as f}from"./useAccountMenu-C3n_TK9i.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CtwhvWNz.js";import"./Bell-RQ032FB-.js";import"./Bookmark-BWpxLimZ.js";import"./ClockDashed-C6MEI82i.js";import"./globalMenu-DL7M85KS.js";import"./PersonCircle-BPRJgZfT.js";import"./Buildings2-D7agrZxu.js";import"./InboxFill-DlqFyUHD.js";import"./MenuGrid-BD0Bs4Xj.js";import"./MagnifyingGlass--VnpSKzI.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CrsjlxL0.js";import"./Trash-C8Gu1dIX.js";import"./useLayout-DLWByhwK.js";import"./useLocale-D87inwSL.js";import"./header-j0ynUp2_.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-7RMszhcf.js";import"./BookmarkSettingsItem-DEa86Yfi.js";import"./QueryLabel-Dg-wTRTc.js";import"./Plus-5W3QRt0z.js";import"./SettingsItemBase-B7ADsorz.js";import"./ItemMedia-D2PQb4gS.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./ChevronUp-aSivYnb8.js";import"./ChevronDown-DepqY6FK.js";import"./ChevronRight-BEnuMmPo.js";import"./ItemBase-B5l2T3D-.js";import"./ItemLink-DgdDmtkg.js";import"./ItemControls-DXMoT8B2.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./Typography-C-nn41yV.js";import"./useHighlightedText-CMND7wU2.js";import"./ContextMenu-DXVFrfFn.js";import"./useDropdownMenuController-C7yQw1zK.js";import"./Dropdown-DPTyogAf.js";import"./SearchField-BI6hQSM3.js";import"./FieldBase-CJmJ_FUR.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";import"./MenuListItem-Cpkt8LLi.js";import"./MenuListHeading-CkHpUapY.js";import"./MenuItem-CLCRatEV.js";import"./Checkmark-V7YKXO-0.js";import"./ItemLabel-D6hw0WzI.js";import"./index-dwvgmSh8.js";import"./InformationSquare-CEM0wkOI.js";import"./MenuElipsisHorizontal-CrejXsZ9.js";import"./Pencil-VFlwHoyG.js";import"./SkipLink-QsLUwNBd.js";import"./Banner-BM99tWId.js";import"./GlobalHeader-D9_ebSdi.js";import"./useIsDesktop-BHChZWCT.js";import"./GlobalAccountButton-nts2RdNV.js";import"./Enter-DGbkUpmN.js";import"./GlobalMenuButton-DiaTFD82.js";import"./MenuHamburger-wLQDd0FF.js";import"./AccountSelector-KUwZjk4j.js";import"./Switch-C_mJJsLr.js";import"./AccountMenu-6piFieQ8.js";import"./GlobalMenu-DWxznB32.js";import"./ArrowUndo-vXvPRQCY.js";import"./Globe-D7e39i-c.js";import"./BreadcrumbsLink-CG6bohXP.js";import"./ArrowRight-D8Hr5Ggc.js";import"./Footer-PvMpWrFK.js";import"./Flex-UXtVwom-.js";import"./ButtonGroup-BYverAEg.js";import"./ButtonGroupDivider-CbGS_QDF.js";import"./ChevronUpDown-B2xWlDPi.js";import"./ToolbarMenu--3FAbZwG.js";import"./ToolbarSearch-Bs15t96k.js";import"./SettingsModal-DXXu6Uto.js";import"./ModalBody-r5nbGSQx.js";import"./Section-C3vz0YaC.js";import"./ButtonIcon-DbIq7rLn.js";import"./ButtonLabel-eTtLvekB.js";import"./TextField-Cb5Akx0Q.js";import"./inboxMenu-BBN3pAqv.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
