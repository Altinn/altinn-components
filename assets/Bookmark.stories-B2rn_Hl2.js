import{j as o}from"./iframe-Bk_HwK4l.js";import{u as h}from"./useInboxLayout-XE0Qrq78.js";import{u as j}from"./useAccountMenu-BCMgnvyr.js";import{u as c,B as g}from"./useBookmarks-BLCAQUK8.js";import{L as k}from"./Layout-DMzQhhMc.js";import{P as x}from"./PageBase-GofvOrmd.js";import{H as p}from"./Heading-D6li-Zgs.js";import{T as b}from"./Toolbar-DnSydSf5.js";import{B as I}from"./BookmarkModal-DH0rQiWK.js";import{u as S}from"./useProfileLayout-BMFpPC5z.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-BM5KU2Rv.js";import"./InboxFill-BT0lNQUY.js";import"./useId-WArpTTRC.js";import"./Plus-Db6y3gEP.js";import"./PersonCircle-Bug5_KA4.js";import"./Bookmark-CWSsFSTc.js";import"./Archive-Cxwz0IDr.js";import"./Trash-D4QcHzdr.js";import"./InformationSquare-D1WxufmY.js";import"./globalMenu-DuY1idWA.js";import"./Buildings2-COMDnIsr.js";import"./MenuGrid-CXZfn0tj.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-FKYXulYL.js";import"./useLocale-CwyHQUA3.js";import"./header-4Zq4f7xj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-Bykr2pwN.js";import"./Button-DXv-zg1S.js";import"./button-DRIhbrAI.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DPdB3j_G.js";import"./QueryLabel-CZc9dsnK.js";import"./SettingsItemBase-QKrgQ9kJ.js";import"./ChevronUp-DmnNnXSw.js";import"./ChevronDown-Butud2ye.js";import"./ChevronRight-BEdxYQXL.js";import"./ItemLink-C7GmrZNk.js";import"./index-Bj80ru-z.js";import"./ItemMedia-QvgC3e5a.js";import"./XMark-BlM7H2uk.js";import"./Avatar-B1R5c004.js";import"./Skeleton-CZ4GHxMp.js";import"./AvatarGroup-CkGvw6sL.js";import"./Icon-BbsTdu7G.js";import"./ItemControls-DoACt_K_.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-9_XA-VKE.js";import"./useHighlightedText-BjD5CEaG.js";import"./ContextMenu-Ddpj-J5p.js";import"./useDropdownMenuController--BMHU_Uw.js";import"./Dropdown-DDGzAAFH.js";import"./MenuElipsisHorizontal-Dp80SMX0.js";import"./SearchField-CcfOce7B.js";import"./FieldBase-zuKERQJx.js";import"./Label-D1l41OtR.js";import"./index-RvDLUlZV.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./MenuListItem-p80RBs_A.js";import"./MenuListHeading-RVi62nau.js";import"./MenuItem-BW0J3eqZ.js";import"./Checkmark-BwmprQFp.js";import"./useMenu-BNIm_aif.js";import"./index-BL_SwWgZ.js";import"./Pencil-oFql5W3J.js";import"./SkipLink-CNDGWICJ.js";import"./Banner-DjaEdV5f.js";import"./GlobalHeader-BvERlZj1.js";import"./useIsDesktop-DtaFkEnB.js";import"./GlobalAccountButton-B48oWHvp.js";import"./Enter-BTsqsWJv.js";import"./GlobalMenuButton-CwOQpq-X.js";import"./MenuHamburger-CKMlqnsy.js";import"./AccountSelector-D7vSqsSf.js";import"./heading-D5vp04a9.js";import"./AccountMenu-nqWsIwM6.js";import"./Switch-Dp4vFwT2.js";import"./GlobalMenu-DBRHlNQB.js";import"./ArrowUndo-DFEq1-Ux.js";import"./Globe-bFqWwKDV.js";import"./BreadcrumbsLink-DXiaezw9.js";import"./ArrowRight-CFWaHxT6.js";import"./Footer-D8m_3clk.js";import"./Flex-CqtyDzLK.js";import"./ChevronUpDown-xq3F75kC.js";import"./ButtonGroup-IyhiSPmN.js";import"./ButtonGroupDivider-Cky36suu.js";import"./ToolbarMenu-C9Ek9car.js";import"./ToolbarSearch-D1BZ8Hq2.js";import"./SettingsModal-DkPNb1kC.js";import"./ModalBody-BjB278uQ.js";import"./Section-DaLGW2Wx.js";import"./ButtonIcon-2DuRl7EZ.js";import"./ButtonLabel-B7SI3ORL.js";import"./TextField-ByOQI3xh.js";import"./Bell-qYb-2Nld.js";import"./ClockDashed-7cETgVqe.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
