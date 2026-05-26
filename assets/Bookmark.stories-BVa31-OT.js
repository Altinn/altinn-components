import{p as o}from"./iframe-a6n42jIx.js";import{u as S}from"./useProfileLayout-2ybUU1sI.js";import{u as c,B as g}from"./useBookmarks-Cyu6ozTU.js";import{L as k}from"./Layout-BRGvJwwG.js";import{P as x}from"./PageBase-SjpNnwMC.js";import{H as p}from"./Heading-Dza3pExo.js";import{T as b}from"./Toolbar-CIlW7YHV.js";import{B as I}from"./BookmarkModal-bTqB-833.js";import{u as h}from"./useInboxLayout-BO0oc5UJ.js";import{u as f}from"./useAccountMenu-DmTvAoMW.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-BZeQpE7w.js";import"./useId-JsUrCC3L.js";import"./Bell-Cm42STki.js";import"./Bookmark-BN9AQyZ7.js";import"./ClockDashed-D-ph8zZH.js";import"./globalMenu-CjhK5C5P.js";import"./PersonCircle-ByuyFVIm.js";import"./Buildings2-BzaU70YA.js";import"./InboxFill-DdMqlU5A.js";import"./MenuGrid-CkS8F2ND.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-C-KNrort.js";import"./Trash-BiwQCIF6.js";import"./useLayout-CTpMtVcS.js";import"./useLocale-CqBxbhCd.js";import"./header-dYNiSCTc.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BnSKl7OB.js";import"./BookmarkSettingsItem-BDnDMVKy.js";import"./QueryLabel-CSxDB6uf.js";import"./Plus-DWNwY5kK.js";import"./SettingsItemBase-B7NLkNBM.js";import"./ItemMedia-9TYJyMgm.js";import"./index-D2z1-3lt.js";import"./XMark-ENWUN_kz.js";import"./Avatar-DDS_Cv_Z.js";import"./Skeleton-BMznOa58.js";import"./AvatarGroup-BaunAvi6.js";import"./Icon-C2KYL6xM.js";import"./ChevronUp-DaZVux3Q.js";import"./ChevronDown--dIT-Lld.js";import"./ChevronRight-DzQRiVjQ.js";import"./ItemLink-BU8f8KGB.js";import"./ItemControls-vHjq0nAG.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./tooltip-D8RdZxwd.js";import"./Typography-K_BS0H0I.js";import"./useHighlightedText-Bq-Ej33u.js";import"./ContextMenu-D_LAygeA.js";import"./useDropdownMenuController-ChUHZsVx.js";import"./Dropdown-MBw9TKMx.js";import"./Button-DYhT04-k.js";import"./SearchField-Cpk_dpFX.js";import"./FieldBase-BOMRGuHX.js";import"./Label-CP4RT8OS.js";import"./Input-BUxVKC9v.js";import"./MenuListItem-BG5nT3q2.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./MenuItem-DlDQtEmE.js";import"./Checkmark-NdO0COsu.js";import"./index-Bc5QqnLi.js";import"./InformationSquare-DAX_zw-n.js";import"./MenuElipsisHorizontal-B575Bwb2.js";import"./Pencil-CAqbJXAc.js";import"./SkipLink-D-DRY7Zf.js";import"./Banner-BszWFQr2.js";import"./GlobalHeader-DUds1LOj.js";import"./useIsDesktop-Dz8Xfx0T.js";import"./GlobalAccountButton-Blp41UeO.js";import"./Enter-DL78dUQh.js";import"./GlobalMenuButton-D7X6GhxI.js";import"./MenuHamburger-CET8gFNo.js";import"./AccountSelector-Bjg775ES.js";import"./Switch-SU31XbhY.js";import"./AccountMenu-1G5b85NP.js";import"./GlobalMenu-DXCefBzj.js";import"./ArrowUndo-BXKQsB65.js";import"./Globe-DFgIDL35.js";import"./BreadcrumbsLink-DlIyvrPR.js";import"./ArrowRight-xh97N2k0.js";import"./Footer-RvPt9ieO.js";import"./Flex-BTGTFkLF.js";import"./ButtonGroup-r8c9eAn-.js";import"./ButtonGroupDivider-Bgl5eh5n.js";import"./ChevronUpDown-jw4Svc_J.js";import"./ToolbarMenu-Dv5AKmqP.js";import"./ToolbarSearch-y1cFyJwK.js";import"./SettingsModal-CcO2d848.js";import"./ModalBody-BJnVO0Kt.js";import"./Section-SbJC69tZ.js";import"./ButtonIcon-BSWg8HV7.js";import"./ButtonLabel-00C_O_zy.js";import"./TextField-BZ7hsKcf.js";import"./inboxMenu-DP4i0XL1.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
