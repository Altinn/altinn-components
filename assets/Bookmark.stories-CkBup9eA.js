import{a7 as o}from"./iframe-CAjSv_nS.js";import{u as S}from"./useProfileLayout-CijTO93N.js";import{u as c,B as g}from"./useBookmarks-Dv8Yv8mO.js";import{L as k}from"./Layout-ZWNbHIN7.js";import{P as x}from"./PageBase-CRKzyO9Z.js";import{H as p}from"./Heading-Dl2CB_qz.js";import{T as b}from"./Toolbar-BfqPKzCx.js";import{B as I}from"./BookmarkModal-BrF6Aj0w.js";import{u as h}from"./useInboxLayout-BR6EcPXy.js";import{u as f}from"./useAccountMenu-C5sjZYs2.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-DEe8KAvC.js";import"./Bell-CZMg6VBY.js";import"./Bookmark-CVASSdLQ.js";import"./ClockDashed-Bkab8kOk.js";import"./globalMenu-Bu4U4Sdt.js";import"./PersonCircle-C8v-lBPL.js";import"./Buildings2-B2Sj8eeu.js";import"./InboxFill-DQ0aEly4.js";import"./MenuGrid-CBA2935z.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-D9_PLgbn.js";import"./Trash-CNWgj8JD.js";import"./useLayout-CKqjadf7.js";import"./useLocale-Blm1WIgg.js";import"./header-C5XfkQb0.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DNlZtc9u.js";import"./BookmarkSettingsItem-D-RfLDPR.js";import"./QueryLabel-DGaNo9Mv.js";import"./Plus-BAe7a_fr.js";import"./SettingsItemBase-XF7ZTHu0.js";import"./ItemMedia-DCE7hmVr.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./ChevronUp-CiQ1vTJ_.js";import"./ChevronDown-DV1YpklV.js";import"./ChevronRight-DBCR3hzH.js";import"./ItemBase-Bsx8jWac.js";import"./ItemLink-BmhLdRET.js";import"./ItemControls-C86-eNC3.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./Typography-CP4EAHNP.js";import"./useHighlightedText-BhVVUcDt.js";import"./ContextMenu-BXFgsv5t.js";import"./useDropdownMenuController-13HA63ON.js";import"./Dropdown-CFFHqeqH.js";import"./SearchField-BeyrM52L.js";import"./FieldBase-B3aukQxa.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./MenuListHeading-DK632LaI.js";import"./MenuItem-C500ZIIj.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./InformationSquare-CA9knMPH.js";import"./MenuElipsisHorizontal-BDVfbbpF.js";import"./Pencil-CW1VfL-a.js";import"./SkipLink-C0ps2RQ-.js";import"./Banner-DxIJOORh.js";import"./GlobalHeader-D5ZGSCT-.js";import"./useIsDesktop-CNSJjTJn.js";import"./GlobalAccountButton-DCdJBRGc.js";import"./Enter-DlXm2DlN.js";import"./GlobalMenuButton-CBBmuqFJ.js";import"./MenuHamburger-BbzPLYJ2.js";import"./AccountSelector-CfR9zR4X.js";import"./Switch-D9JMrYde.js";import"./AccountMenu-DqVVwRYg.js";import"./GlobalMenu-DLc3Jzlm.js";import"./ArrowUndo-Dk2uggSE.js";import"./Globe-nvMd5ZQX.js";import"./BreadcrumbsLink-CywEWjrR.js";import"./ArrowRight-BIY-HWMN.js";import"./Footer-CRc1UDyx.js";import"./Flex-Dkl3V3J_.js";import"./ButtonGroup-CHaM1dTc.js";import"./ButtonGroupDivider-CHEKOlvW.js";import"./ChevronUpDown-pCQGyX3P.js";import"./ToolbarMenu-BZ58RiB_.js";import"./ToolbarSearch-CrDYY0to.js";import"./SettingsModal-r0MnGfEQ.js";import"./ModalBody-BEocNTvo.js";import"./Section-QeF7xouO.js";import"./ButtonIcon-BmNdvyqy.js";import"./ButtonLabel-BEVL1UP8.js";import"./TextField-sSdKcljq.js";import"./inboxMenu-DaYzmyie.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
