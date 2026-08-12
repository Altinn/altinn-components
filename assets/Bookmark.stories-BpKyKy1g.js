import{a7 as o}from"./iframe-BOq385O8.js";import{u as S}from"./useProfileLayout-CqRO0kRT.js";import{u as c,B as g}from"./useBookmarks-D7LMgiFh.js";import{L as k}from"./Layout-wudQ00uA.js";import{P as x}from"./PageBase-BG143wOR.js";import{H as p}from"./Heading-BGbBHiZX.js";import{T as b}from"./Toolbar-CCwQQMc7.js";import{B as I}from"./BookmarkModal-I3HAvKQn.js";import{u as h}from"./useInboxLayout-KyZDChTx.js";import{u as f}from"./useAccountMenu-zilSzJ3H.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-DYBbyooL.js";import"./Bell-COrbJPfx.js";import"./Bookmark-2lecxZEi.js";import"./ClockDashed-DTkkmimZ.js";import"./globalMenu-Cu4d-lyI.js";import"./PersonCircle-BQ4R8HqN.js";import"./Buildings2-D7iJzXxT.js";import"./InboxFill-BeEst1Ss.js";import"./MenuGrid-n6_sTm_u.js";import"./MagnifyingGlass-DLwuof1g.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-EAW4hj1t.js";import"./Trash-CZ2Z9NgZ.js";import"./useLayout-BIjq-Klh.js";import"./useLocale-VXx8l_GV.js";import"./header-B0l7eVM_.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-RUc5K2KC.js";import"./BookmarkSettingsItem-H1eWnlTH.js";import"./QueryLabel-26WLPKAT.js";import"./Plus-7pPCm0cp.js";import"./SettingsItemBase-C9i7Dtoh.js";import"./ItemMedia-BFjKYKIC.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./ChevronUp-DtZBQ8_H.js";import"./ChevronDown-ByPuuZmk.js";import"./ChevronRight-8gth-Lkl.js";import"./ItemBase-D0RDacFK.js";import"./ItemLink-CYEiKVLs.js";import"./ItemControls-qKJDjHzO.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./Typography-DYb-ep--.js";import"./useHighlightedText-COTrDIB8.js";import"./ContextMenu-66ekmVcw.js";import"./useDropdownMenuController-Bc426jVC.js";import"./Dropdown-B3R21JXo.js";import"./SearchField-1cIkQLXt.js";import"./FieldBase-SENAbJS5.js";import"./Field-BAObIoZk.js";import"./Label-CJalMe_4.js";import"./Input-B8j-6nyc.js";import"./MenuListItem-C3dH633T.js";import"./MenuListDivider-DW1VkhOq.js";import"./MenuListHeading-B04brtcm.js";import"./MenuItem-C887Ld9X.js";import"./Checkmark-BfJs351m.js";import"./ItemLabel-32-F56Tw.js";import"./InformationSquare-ChpInVUG.js";import"./MenuElipsisHorizontal-Dl29S16F.js";import"./Pencil-DKdqqxEe.js";import"./SkipLink-B8bToWK4.js";import"./Banner-C6NPmyVy.js";import"./GlobalHeader-DQ-2Yj6f.js";import"./useIsDesktop-BmRCZ7jt.js";import"./GlobalAccountButton-a3opwitw.js";import"./Enter-C9D2pmVO.js";import"./GlobalMenuButton-D2eY6o_d.js";import"./MenuHamburger-5u_HMvvr.js";import"./AccountSelector-S6whGXp2.js";import"./Switch-kVfS8bk3.js";import"./AccountMenu-TCts2bcC.js";import"./GlobalMenu-CUwxN7Bm.js";import"./ArrowUndo-BRAjq8UN.js";import"./Globe-D6RnMHjZ.js";import"./BreadcrumbsLink-D9VGLC8K.js";import"./ArrowRight-DwCygRAD.js";import"./Footer-BgqROVlF.js";import"./Flex-CyZuoM67.js";import"./ButtonGroup-D8WIpAHE.js";import"./ButtonGroupDivider-DKejejps.js";import"./ChevronUpDown-DSbXmavj.js";import"./ToolbarMenu-CZ_z23OY.js";import"./ToolbarSearch-BEGqVCJy.js";import"./SettingsModal-BFCJlhuD.js";import"./ModalBody-CnCSIXjS.js";import"./Section-B7vrx1o8.js";import"./ButtonIcon-By9qcYwT.js";import"./ButtonLabel-BXEtCYpU.js";import"./TextField-CqnZ-ScL.js";import"./inboxMenu-C35aHZ4v.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
