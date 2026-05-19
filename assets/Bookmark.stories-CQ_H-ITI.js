import{j as o}from"./iframe-CPVbSj3C.js";import{u as h}from"./useInboxLayout-C_q3ozQe.js";import{u as j}from"./useAccountMenu-BXGFvz9G.js";import{u as c,B as g}from"./useBookmarks-DEHUOJFx.js";import{L as k}from"./Layout-DM7d4JGX.js";import{P as x}from"./PageBase-DFhlNnxF.js";import{H as p}from"./Heading-Bxz0tryo.js";import{T as b}from"./Toolbar-BbXH74iX.js";import{B as I}from"./BookmarkModal-B36h03Ki.js";import{u as S}from"./useProfileLayout-D4QOcsO1.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-B8mKNdPQ.js";import"./InboxFill-BcVdTZOM.js";import"./useId-CeU55pH0.js";import"./Plus-ChI102rs.js";import"./PersonCircle-D2e_Fk0r.js";import"./Bookmark-DGWiCv9O.js";import"./Archive-DoTzijFK.js";import"./Trash-CN9HTNng.js";import"./InformationSquare-y17ZYOyi.js";import"./globalMenu-0agvsO0_.js";import"./Buildings2-DTyd86gG.js";import"./MenuGrid-Be7605dr.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-DHrV6fTQ.js";import"./useLocale-DoH-u2AV.js";import"./header-CEPK6jIJ.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-Diwb-etP.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-CaGkRCUN.js";import"./QueryLabel-itsnj659.js";import"./SettingsItemBase-D1iPa5AE.js";import"./ChevronUp-26jjNeZQ.js";import"./ChevronDown-Dne2Ro5q.js";import"./ChevronRight-D8cN60Uo.js";import"./ItemLink-C2_R4otY.js";import"./index-B-yq3MoC.js";import"./ItemMedia-C5hW-xxB.js";import"./XMark-DWjKCZtX.js";import"./Avatar-Ctx52zko.js";import"./Skeleton-O-y9i0gG.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Icon-DFTXBWnL.js";import"./ItemControls-DA5Yy7AS.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-CiUpHFvi.js";import"./useHighlightedText-cpJ8B6bV.js";import"./ContextMenu-BpEtaE5j.js";import"./useDropdownMenuController-D8Yozs_o.js";import"./Dropdown-CWKVFS9V.js";import"./MenuElipsisHorizontal-2MdITEPY.js";import"./SearchField-B-nnAALe.js";import"./FieldBase-COzHnWja.js";import"./Label-VN1m6SC8.js";import"./index-DZJ03fJe.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./MenuItem-CBTlmB_y.js";import"./Checkmark-D2vzhSBC.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./Pencil-BX-ws17f.js";import"./SkipLink-C9vS1cNP.js";import"./Banner-CP2Dj74D.js";import"./GlobalHeader-BGoCnhrS.js";import"./useIsDesktop-BZmvipjT.js";import"./GlobalAccountButton-CtFwuVqI.js";import"./Enter-CVOd6v7z.js";import"./GlobalMenuButton-DRqsafuN.js";import"./MenuHamburger-CAdTjq6-.js";import"./AccountSelector-rf5kfVpR.js";import"./heading-Byf1hlNK.js";import"./AccountMenu-BgkC_wNu.js";import"./Switch-kADCV8Cm.js";import"./GlobalMenu-C_-kd9LF.js";import"./ArrowUndo-BAwqFT7u.js";import"./Globe-B9YHqOf_.js";import"./BreadcrumbsLink-Cqbe4lvR.js";import"./ArrowRight-HvbH3AZa.js";import"./Footer-Br-nBrtw.js";import"./Flex-DcepQHCt.js";import"./ChevronUpDown-Dyy32e_j.js";import"./ButtonGroup-Cm_Y-nHl.js";import"./ButtonGroupDivider-DGgAQ05Q.js";import"./ToolbarMenu---rWQzXB.js";import"./ToolbarSearch-DaAb4thF.js";import"./SettingsModal-BSXdfxkk.js";import"./ModalBody-BKlJM7ar.js";import"./Section-D88C7V2M.js";import"./ButtonIcon-2zejLvFM.js";import"./ButtonLabel-DpmDeYsj.js";import"./TextField-B-bNJNaA.js";import"./Bell-CqEvBRjS.js";import"./ClockDashed-CXAa2KHW.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const fe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,fe as __namedExportsOrder,Se as default};
