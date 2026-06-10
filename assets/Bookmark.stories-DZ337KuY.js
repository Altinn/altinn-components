import{a7 as o}from"./iframe-CENvAP26.js";import{u as S}from"./useProfileLayout-BsHRi4R5.js";import{u as c,B as g}from"./useBookmarks-BQgdA5NU.js";import{L as k}from"./Layout-DAQpfuz2.js";import{P as x}from"./PageBase-DIe3hW1r.js";import{H as p}from"./Heading-mra_L4pQ.js";import{T as b}from"./Toolbar-DpO9GV8k.js";import{B as I}from"./BookmarkModal-DbKbbhqM.js";import{u as h}from"./useInboxLayout-BumYEsFI.js";import{u as f}from"./useAccountMenu-UsnhQD61.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-Di08reZX.js";import"./Bell-zOe7McjR.js";import"./Bookmark-DuFvDZBJ.js";import"./ClockDashed-CNykKsxK.js";import"./globalMenu-CjMqv0jS.js";import"./PersonCircle-B1WnJpSq.js";import"./Buildings2-Cx_FQqS5.js";import"./InboxFill-T9OvqkvK.js";import"./MenuGrid-D_WOCdA8.js";import"./MagnifyingGlass-DDkWwcsn.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-De4Ormwu.js";import"./Trash-Cs7D8kti.js";import"./useLayout-D-ndrqp_.js";import"./useLocale-5_xwWSwQ.js";import"./header-R7c6h7ER.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DmwlujsT.js";import"./BookmarkSettingsItem-B-v4RMVz.js";import"./QueryLabel-BP7BuKC8.js";import"./Plus-CWY-kAGj.js";import"./SettingsItemBase-CcMWppnL.js";import"./ItemMedia-C5TE1h6m.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./ChevronUp-BFUCM25K.js";import"./ChevronDown-88nFsQYK.js";import"./ChevronRight-CqCnB5Zg.js";import"./ItemBase-BmDbJFS_.js";import"./ItemLink-DEb6WuQs.js";import"./ItemControls-DaWh-3zk.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./Typography-BK5AylHP.js";import"./useHighlightedText-BwOLK-i3.js";import"./ContextMenu-AeMGqdrL.js";import"./useDropdownMenuController-BbdnPNgS.js";import"./Dropdown-BZVY_4Wm.js";import"./SearchField-B76VS5jy.js";import"./FieldBase-IIcWSE0k.js";import"./Field-oHEtcERA.js";import"./Label-N53R6xsN.js";import"./Input-CMkEMAO8.js";import"./MenuListItem-BT-iZ3cq.js";import"./MenuListHeading-BD0rgLCP.js";import"./MenuItem-Fa6rC5wV.js";import"./Checkmark-D1ifpvt_.js";import"./ItemLabel-CqdC7zrv.js";import"./index-BzTqrnLh.js";import"./InformationSquare-DfDfuKua.js";import"./MenuElipsisHorizontal-CQDhRMvW.js";import"./Pencil-D0UsiUm5.js";import"./SkipLink-CpJ5iCln.js";import"./Banner-DmmSmM5y.js";import"./GlobalHeader-BqqSQIP8.js";import"./useIsDesktop-C4w-DyYP.js";import"./GlobalAccountButton-C3e6i8a2.js";import"./Enter-CEXAJ-VY.js";import"./GlobalMenuButton-BJO4NSOM.js";import"./MenuHamburger-acEhsrwC.js";import"./AccountSelector-B1AzVeP1.js";import"./Switch-BB3pqrIE.js";import"./AccountMenu-BnAb9qBG.js";import"./GlobalMenu-tnZS_kWC.js";import"./ArrowUndo-DxMsWBCJ.js";import"./Globe-0uZUwFK3.js";import"./BreadcrumbsLink-A93bLAC6.js";import"./ArrowRight-Dz7-H-VC.js";import"./Footer-BqQW_uLB.js";import"./Flex-yTAvUoR1.js";import"./ButtonGroup-C4l5taXG.js";import"./ButtonGroupDivider-1X3Nwv0w.js";import"./ChevronUpDown-Ca6IZrDH.js";import"./ToolbarMenu-CsmlAKby.js";import"./ToolbarSearch-Ds1gk2xh.js";import"./SettingsModal-fj349tuh.js";import"./ModalBody-BPAT2cvX.js";import"./Section-Dfl51lKI.js";import"./ButtonIcon-CfWllzoR.js";import"./ButtonLabel-CGMQv3HF.js";import"./TextField-fdkUYqPj.js";import"./inboxMenu-CeShhoQi.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
