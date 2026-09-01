import{a7 as o}from"./iframe-DMrRMxbq.js";import{u as S}from"./useProfileLayout-BbTLxymH.js";import{u as c,B as g}from"./useBookmarks-CldlvPYc.js";import{L as k}from"./Layout-JeqDW6pR.js";import{P as x}from"./PageBase-BkE9rxoP.js";import{H as p}from"./Heading-BhmjWuIr.js";import{T as b}from"./Toolbar-BZH1bADA.js";import{B as I}from"./BookmarkModal-DP-ZRRnt.js";import{u as h}from"./useInboxLayout-D35aIj1S.js";import{u as f}from"./useAccountMenu-DgUVaGSz.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-D9MSWJSi.js";import"./Bell-bAScnVre.js";import"./Bookmark-jMqd69vz.js";import"./ClockDashed-BZpig836.js";import"./globalMenu-DbvPhrfG.js";import"./PersonCircle-DyHpIQU5.js";import"./Buildings2-reMkWEs_.js";import"./InboxFill-6uq36H51.js";import"./MenuGrid-CxnVSjLH.js";import"./MagnifyingGlass-DofikZhZ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BwBynVKj.js";import"./Trash-EXN3xZ3n.js";import"./useLayout-BO7i3ay6.js";import"./useLocale-Zirkpq73.js";import"./header-0kQoZtY9.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CNg8vInV.js";import"./BookmarkSettingsItem-5IQWkzcz.js";import"./QueryLabel-Cs5R43NE.js";import"./Plus-CNvKeQn4.js";import"./SettingsItemBase-8tE--AV6.js";import"./ItemMedia-Dx1IKYEg.js";import"./Avatar-C6i6C6T9.js";import"./AvatarGroup-DVS-_6qx.js";import"./ChevronUp-iFSbc_bY.js";import"./ChevronDown-B_vMfdZY.js";import"./ChevronRight-ngEBzgMu.js";import"./ItemBase-Pn30j4Ce.js";import"./ItemLink-BR9CgO0o.js";import"./ItemControls-DNnHu-Ez.js";import"./Badge-CzHyduDR.js";import"./Tooltip-1SJQbRAy.js";import"./Typography-z164oB1T.js";import"./useHighlightedText-qcaYlVq2.js";import"./ContextMenu-Bfc1xyI2.js";import"./useDropdownMenuController-V_PAwfJs.js";import"./Dropdown-B5Bg-WA0.js";import"./SearchField-nNatmuZA.js";import"./FieldBase-BwVJ7Sfq.js";import"./Field-DxDkeKhB.js";import"./Label-CB0_8IHy.js";import"./Input-CZPP85wE.js";import"./MenuListItem-CATFKnlr.js";import"./MenuListDivider-CzVCr-XK.js";import"./MenuListHeading-B9JHXv6C.js";import"./MenuItem-DLpEa2I6.js";import"./Checkmark-BUuDcLZs.js";import"./ItemLabel-DavwL6MJ.js";import"./InformationSquare-C88VQYSr.js";import"./MenuElipsisHorizontal-B8IDozkD.js";import"./Pencil-cfwYBQBM.js";import"./SkipLink-4YbRrFwP.js";import"./CookieBanner-C_MDX-N6.js";import"./Banner-kW9XarUo.js";import"./GlobalHeader-eiSHWSql.js";import"./useIsDesktop-BZ5IVph7.js";import"./GlobalAccountButton-PnIW8EKf.js";import"./Enter-BqiFr20G.js";import"./GlobalMenuButton-C1DCU4FG.js";import"./MenuHamburger-LUIk6x4-.js";import"./AccountSelector-BRvHao2Y.js";import"./Switch-CPFxWEtZ.js";import"./AccountMenu-CmOp2xUf.js";import"./GlobalMenu-f-YUs_iC.js";import"./ArrowUndo-DjzOQXeb.js";import"./Globe-BfSA-wJy.js";import"./BreadcrumbsLink-Bf-OkN9K.js";import"./ArrowRight-BDzZD6JY.js";import"./Footer-Cy-1Nduu.js";import"./Flex-D4xbJs2N.js";import"./ButtonGroup-DGYAXoph.js";import"./ButtonGroupDivider-DpZQ_MzX.js";import"./ChevronUpDown-Di7rRHlK.js";import"./ToolbarMenu-CV-0yait.js";import"./ToolbarSearch-DVFNc1wI.js";import"./SettingsModal-hbvHbbLI.js";import"./ModalBody-DyvDS6kr.js";import"./Section-R5IQ5vtB.js";import"./ButtonIcon-CVi_n_n2.js";import"./ButtonLabel-DrLm7ODF.js";import"./TextField-CvMUKPG7.js";import"./inboxMenu-5esGDebj.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
