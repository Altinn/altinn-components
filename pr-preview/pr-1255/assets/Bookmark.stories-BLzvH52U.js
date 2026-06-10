import{a7 as o}from"./iframe-B2qSCuzl.js";import{u as S}from"./useProfileLayout-DUyZcqJU.js";import{u as c,B as g}from"./useBookmarks--uSUZsgN.js";import{L as k}from"./Layout-76ZEl-bN.js";import{P as x}from"./PageBase-BWZlJD1k.js";import{H as p}from"./Heading-BraOiwz9.js";import{T as b}from"./Toolbar-qVZShKCx.js";import{B as I}from"./BookmarkModal-Bno0XrCB.js";import{u as h}from"./useInboxLayout-B8o-yyZV.js";import{u as f}from"./useAccountMenu-CLG0BEsy.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-v2yxnjxD.js";import"./Bell-CeBdobVY.js";import"./Bookmark-BnCq2bwL.js";import"./ClockDashed-DuvS0HtT.js";import"./globalMenu-CTO35srA.js";import"./PersonCircle-DkxcEC2H.js";import"./Buildings2-CSa0Fj3k.js";import"./InboxFill-BGlK0kAC.js";import"./MenuGrid-DiWI3u40.js";import"./MagnifyingGlass-BW6TNVS9.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-l9uRDAtU.js";import"./Trash-DxBU9Rfy.js";import"./useLayout-DO3aS3SB.js";import"./useLocale-BcTppNNY.js";import"./header-D3_ONeFu.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-4wlPj4vw.js";import"./BookmarkSettingsItem-D89I7WrO.js";import"./QueryLabel-Ci40n7fV.js";import"./Plus-C423HqNe.js";import"./SettingsItemBase-C7zixA8u.js";import"./ItemMedia-C3fquT_8.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./ChevronUp-DsaXlzpU.js";import"./ChevronDown-MLEeMvzz.js";import"./ChevronRight-CE-Naqr7.js";import"./ItemBase-BlhljEQ3.js";import"./ItemLink-BLJ5L0E3.js";import"./ItemControls-i4q63th9.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./Typography-CidHk-ga.js";import"./useHighlightedText-BGZ3rca6.js";import"./ContextMenu-nwu6xbhA.js";import"./useDropdownMenuController-B1sM5Fkl.js";import"./Dropdown-CXjz9DNR.js";import"./SearchField-M5wz_Je4.js";import"./FieldBase-LsrXuCdT.js";import"./Field-IfN9vhAd.js";import"./Label-qtoi2ZUa.js";import"./Input-BEYjfhLL.js";import"./MenuListItem-C_Y3s3QU.js";import"./MenuListHeading-Dp2ZOdKs.js";import"./MenuItem-DufE-zMI.js";import"./Checkmark-1_ErCtmb.js";import"./ItemLabel-CXwcKPbI.js";import"./index-L4tlORLO.js";import"./InformationSquare-Bz2aeVSU.js";import"./MenuElipsisHorizontal-B1j_W8j_.js";import"./Pencil-CrmJZ54t.js";import"./SkipLink-CfzACGl1.js";import"./Banner-C-RrrCPx.js";import"./GlobalHeader-Ddqn6DNs.js";import"./useIsDesktop-DFn6uBJT.js";import"./GlobalAccountButton-CZP785Uy.js";import"./Enter-D2BxqJId.js";import"./GlobalMenuButton-v9hWJoq1.js";import"./MenuHamburger-CgPTbI81.js";import"./AccountSelector-DqwMajub.js";import"./Switch-BaESAcvv.js";import"./AccountMenu-DTvV-i8u.js";import"./GlobalMenu-4TKKPZA1.js";import"./ArrowUndo-CSSrSj6Y.js";import"./Globe-BwntYx03.js";import"./BreadcrumbsLink-FVIP7hU1.js";import"./ArrowRight-DmbHvLhG.js";import"./Footer-ClXdpL_M.js";import"./Flex-DUbFTLOy.js";import"./ButtonGroup-DPqV5ihn.js";import"./ButtonGroupDivider-BoAXm-c3.js";import"./ChevronUpDown-BAJ3g4bz.js";import"./ToolbarMenu-CZouCPtl.js";import"./ToolbarSearch-jl-Levfl.js";import"./SettingsModal-BLit_PVt.js";import"./ModalBody-DivKqOfu.js";import"./Section-vcV9OTBL.js";import"./ButtonIcon-BiMVSz7h.js";import"./ButtonLabel-YAaoCcyd.js";import"./TextField-DTc4Gwi9.js";import"./inboxMenu-DKT7vNYs.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
