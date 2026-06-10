import{a7 as o}from"./iframe-Dm8TtyEm.js";import{u as S}from"./useProfileLayout-C2yqKBI6.js";import{u as c,B as g}from"./useBookmarks-DNKkkmok.js";import{L as k}from"./Layout-DCgY1UDH.js";import{P as x}from"./PageBase-Bz1eg51F.js";import{H as p}from"./Heading-o839anme.js";import{T as b}from"./Toolbar-Cr4Ik5xT.js";import{B as I}from"./BookmarkModal-CRbI8ks6.js";import{u as h}from"./useInboxLayout-DlpVr_Yr.js";import{u as f}from"./useAccountMenu-CXC8IvVd.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-DqmA_Jut.js";import"./Bell-DFZYtnEr.js";import"./Bookmark-Ck_hNx8n.js";import"./ClockDashed-Dr81oEw7.js";import"./globalMenu-Cmadcfyd.js";import"./PersonCircle-BcqezSYc.js";import"./Buildings2-CJolY4P2.js";import"./InboxFill-DE57VLrT.js";import"./MenuGrid-DUKAUXdJ.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DmUB7KJ0.js";import"./Trash-RbVwKsoy.js";import"./useLayout-D36dTxj8.js";import"./useLocale-D73XwXoi.js";import"./header-Dpv3uMvj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C6oFKHtp.js";import"./BookmarkSettingsItem-BdBPnYZ4.js";import"./QueryLabel-D-jYG4Lg.js";import"./Plus-C1QsrUU0.js";import"./SettingsItemBase-CyHCeD-o.js";import"./ItemMedia-Cx5_mc3M.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./ChevronUp-Bb-oLMAx.js";import"./ChevronDown-DmzEbvsc.js";import"./ChevronRight-C5Kx_riS.js";import"./ItemBase-DBsEIeJ_.js";import"./ItemLink-Cf5EIcQf.js";import"./ItemControls-DU_1Chfl.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./Typography-DQcL3Ryl.js";import"./useHighlightedText-C_daNKpv.js";import"./ContextMenu-WVnf3R79.js";import"./useDropdownMenuController-CfwueQUn.js";import"./Dropdown-CZ-eIzfb.js";import"./SearchField-BpAQrR42.js";import"./FieldBase-CGX4UQb4.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./Input-CDGaFfUN.js";import"./MenuListItem-DVBeGhr8.js";import"./MenuListHeading-B94v3TIt.js";import"./MenuItem-BrCYHgzq.js";import"./Checkmark-BrBHBs34.js";import"./ItemLabel-dygaK8X7.js";import"./index-nln3YNzx.js";import"./InformationSquare-DpmHVTHW.js";import"./MenuElipsisHorizontal-CbjX2CGq.js";import"./Pencil-BxLrlvXI.js";import"./SkipLink-dA1an7OV.js";import"./Banner-7lwLg6nV.js";import"./GlobalHeader-ONe65a5C.js";import"./useIsDesktop-PfKLad4r.js";import"./GlobalAccountButton-CNPdUPYy.js";import"./Enter-Blu4zaop.js";import"./GlobalMenuButton-BK6FRizj.js";import"./MenuHamburger-B-zrC2zx.js";import"./AccountSelector-_-HMhAyF.js";import"./Switch-DFtj9zqM.js";import"./AccountMenu-DGBBpGC3.js";import"./GlobalMenu-DLmJOPU5.js";import"./ArrowUndo-DB164unm.js";import"./Globe-gYssCq7T.js";import"./BreadcrumbsLink-Cmiur_RN.js";import"./ArrowRight-BSwHEhfL.js";import"./Footer-CjfYJLnz.js";import"./Flex-Cpk93h3c.js";import"./ButtonGroup-Cvq3R7p4.js";import"./ButtonGroupDivider-DZY-jAP1.js";import"./ChevronUpDown-WNhFs5tk.js";import"./ToolbarMenu-B0ka5Fx1.js";import"./ToolbarSearch-jDeYxRSL.js";import"./SettingsModal-024qYl2I.js";import"./ModalBody-BPhOhrPb.js";import"./Section-BrWI6aLb.js";import"./ButtonIcon-DDq-LKvW.js";import"./ButtonLabel-BVYKz0oP.js";import"./TextField-Bh_yj_hG.js";import"./inboxMenu-D7zmgbr4.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
