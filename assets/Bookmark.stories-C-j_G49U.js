import{j as o}from"./iframe-BM6RZuQM.js";import{u as h}from"./useInboxLayout-CDlvoqr2.js";import{u as j}from"./useAccountMenu-R2DlDLLf.js";import{u as c,B as g}from"./useBookmarks-BQzvai9F.js";import{L as k}from"./Layout-DZRWYqlP.js";import{P as x}from"./PageBase-Bdd_NXuX.js";import{H as p}from"./Heading-aHWaPGZz.js";import{T as b}from"./Toolbar-jAy78YnB.js";import{B as I}from"./BookmarkModal-DCuqFoNk.js";import{u as S}from"./useProfileLayout-C9ZS9AwX.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-BUb27ZrJ.js";import"./InboxFill-CoU3DNM4.js";import"./useId-BYt_OYJh.js";import"./Plus-DESzxFez.js";import"./PersonCircle-DN7g7QG1.js";import"./Bookmark-BjY-XLx0.js";import"./Archive-DxmrpUmh.js";import"./Trash-CeRRfZXt.js";import"./InformationSquare-sR-zXHjU.js";import"./globalMenu-BGPqSz8E.js";import"./Buildings2-DPJaWJUP.js";import"./MenuGrid-B2fy_4CU.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-BHv6aN6B.js";import"./useLocale-Dq8Iiold.js";import"./header-CiD1VSCk.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-C0v9J4kN.js";import"./Button-DhtPu9_Y.js";import"./tooltip-DKLQ4JCb.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-OzDF1Or4.js";import"./QueryLabel-DVRzqAqw.js";import"./SettingsItemBase-wy81PUWi.js";import"./ChevronUp-CLlFINM4.js";import"./ChevronDown-DYIPhVz6.js";import"./ChevronRight-B7KHdEb3.js";import"./ItemLink-ADNTAdax.js";import"./index-DAnedVDn.js";import"./ItemMedia-qdtGx-k7.js";import"./XMark-EbOSJv8a.js";import"./Avatar-P_Ikblul.js";import"./Skeleton-DWzjK3h6.js";import"./AvatarGroup-pynF50Va.js";import"./Icon-m3ZEAfHU.js";import"./ItemControls-DdRx042_.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./Typography-CXaseqiH.js";import"./useHighlightedText-Ctq_ta7p.js";import"./ContextMenu-CTWKr_fC.js";import"./useDropdownMenuController-ChtSiN5l.js";import"./Dropdown-Cm6GAKAK.js";import"./MenuElipsisHorizontal-Bs3D9CID.js";import"./SearchField-BgkLBjBi.js";import"./FieldBase-lFVyN1xh.js";import"./Label-C7IFl0uM.js";import"./Input-DsxiHlOc.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./MenuItem-CZgTJUho.js";import"./Checkmark-CVccove_.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./Pencil-_eyGXsJC.js";import"./SkipLink-CCgTqTA3.js";import"./Banner-D27RNr2p.js";import"./GlobalHeader-BGMvfPuV.js";import"./useIsDesktop-Dm2dj1pd.js";import"./GlobalAccountButton-BbeQojsg.js";import"./Enter-CBXCMPPv.js";import"./GlobalMenuButton-Bji4cO3L.js";import"./MenuHamburger-BcfCqF_o.js";import"./AccountSelector-CBvboyq8.js";import"./AccountMenu-8uNzYSA_.js";import"./Switch-D6evj3r2.js";import"./GlobalMenu-DptzF8pC.js";import"./ArrowUndo-Bmn4Nzqn.js";import"./Globe-BWe6SIwi.js";import"./BreadcrumbsLink-C4tHqUQj.js";import"./ArrowRight-gJzEyyh7.js";import"./Footer-HAyJleRa.js";import"./Flex-DCHL4VAz.js";import"./ChevronUpDown-DfgLRSTr.js";import"./ButtonGroup-DLPKqiPP.js";import"./ButtonGroupDivider-BOAkNbb9.js";import"./ToolbarMenu-DB1ESAM1.js";import"./ToolbarSearch-es-DLOxw.js";import"./SettingsModal-D-ZvKL37.js";import"./ModalBody-tg8E7uYI.js";import"./Section-h9TGEdkh.js";import"./ButtonIcon-Cvxr_Dcd.js";import"./ButtonLabel-DbDYSY1l.js";import"./TextField-D940yGFY.js";import"./Bell-Bdcl3ieI.js";import"./ClockDashed-sGix1zSO.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
