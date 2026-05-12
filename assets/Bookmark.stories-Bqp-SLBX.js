import{j as o}from"./iframe-CU9tIbvZ.js";import{u as h}from"./useInboxLayout-DBi-nNxW.js";import{u as j}from"./useAccountMenu-C2x3H5o4.js";import{u as c,B as g}from"./useBookmarks-BMmT4Nn9.js";import{L as k}from"./Layout-BcITZW7a.js";import{P as x}from"./PageBase-cSTk_19q.js";import{H as p}from"./Heading-DKJvmFhb.js";import{T as b}from"./Toolbar-DLn5d2hq.js";import{B as I}from"./BookmarkModal-DGLMu9bU.js";import{u as S}from"./useProfileLayout-DGofEGRL.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-BA8Yz9_9.js";import"./InboxFill-BuLZHBJP.js";import"./useId-BEikXtHv.js";import"./Plus-3VXDUyQo.js";import"./PersonCircle-cYf_rPgC.js";import"./Bookmark-CwJlB6fo.js";import"./Archive-BDkPE7N1.js";import"./Trash-hYNo9HK3.js";import"./InformationSquare-Dq6QQdGV.js";import"./globalMenu-YOAoO2do.js";import"./Buildings2-CD4MDmYA.js";import"./MenuGrid-DOhn-Lzt.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-DhkIkB9_.js";import"./useLocale-B5kfBcyL.js";import"./header-DbWRaiIR.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-XWsxyGDr.js";import"./Button-DwluG-LJ.js";import"./button-DfPuT9nv.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-XjQIlsau.js";import"./QueryLabel-B_RPNkEN.js";import"./SettingsItemBase-Doj18tTe.js";import"./ChevronUp-C9A9ysE-.js";import"./ChevronDown-D1kreZKO.js";import"./ChevronRight-XlyxhDjC.js";import"./ItemLink-FRejQ3nm.js";import"./index-Bd_n44R2.js";import"./ItemMedia-DuuCC0AM.js";import"./XMark-DTYd927G.js";import"./Avatar-CPYUWVLR.js";import"./Skeleton-WB8_C3gk.js";import"./AvatarGroup-D82OEK4D.js";import"./Icon-BBvHNxu7.js";import"./ItemControls-BgF8Asgd.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-w6SEqUo0.js";import"./useHighlightedText-okRrJvjD.js";import"./ContextMenu-CYUHBwBA.js";import"./useDropdownMenuController-DyTNGBZv.js";import"./Dropdown-DgULA5TZ.js";import"./MenuElipsisHorizontal-sU1biIaO.js";import"./SearchField-CWeqUa0W.js";import"./FieldBase-Bc5lvX-i.js";import"./Label-BURQuXSo.js";import"./index-ByNurdCO.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuListHeading-kMHXlGu4.js";import"./MenuItem-B01BWq_H.js";import"./Checkmark-DOBFSC3X.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./Pencil-D7DLdTN0.js";import"./SkipLink-BPw_y4WX.js";import"./Banner-CR_tqmXk.js";import"./GlobalHeader-DufVtYeK.js";import"./useIsDesktop-CrKRXhnc.js";import"./GlobalAccountButton-BZeph8Sb.js";import"./Enter-BHytXVt5.js";import"./GlobalMenuButton-CCe0RjIi.js";import"./MenuHamburger-Cl0yoDLg.js";import"./AccountSelector-DsAWvJxU.js";import"./heading-HMF_CCjH.js";import"./AccountMenu-BCXmoxcp.js";import"./Switch-BFjqI2KQ.js";import"./GlobalMenu-CYF_KfY_.js";import"./ArrowUndo-C5gTjs_w.js";import"./Globe-dRDAEiut.js";import"./BreadcrumbsLink-C_FTpjJv.js";import"./ArrowRight-CFzj4t3F.js";import"./Footer-DEg1EnyP.js";import"./Flex-Aa4xg00u.js";import"./ChevronUpDown-BkTcHWzp.js";import"./ButtonGroup-Bc7spR1E.js";import"./ButtonGroupDivider-Dbxz7H96.js";import"./ToolbarMenu-DNG-wyC8.js";import"./ToolbarSearch-DpBsUYzd.js";import"./SettingsModal-KtnV1Bjh.js";import"./ModalBody-c-JjnOdb.js";import"./Section-BozmV6Om.js";import"./ButtonIcon-DRnipxiZ.js";import"./ButtonLabel-ChcktKem.js";import"./TextField-UzGxD5QZ.js";import"./Bell-d_XnJlp6.js";import"./ClockDashed-BPJiTGgl.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
