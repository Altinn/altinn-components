import{a7 as o}from"./iframe-BkdCVhNa.js";import{u as S}from"./useProfileLayout-DDk2ff1t.js";import{u as c,B as g}from"./useBookmarks-v7v-yarR.js";import{L as k}from"./Layout-BPsUbmzN.js";import{P as x}from"./PageBase-CoK3-rCW.js";import{H as p}from"./Heading-CYb_rmks.js";import{T as b}from"./Toolbar-B10IL9NB.js";import{B as I}from"./BookmarkModal-DXQ7UvPQ.js";import{u as h}from"./useInboxLayout-LIJ-sDcg.js";import{u as f}from"./useAccountMenu-DWgMwsyd.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CFXxrMYr.js";import"./Bell-CfxtDJqV.js";import"./Bookmark-1OK4oHKr.js";import"./ClockDashed-CL_amKpI.js";import"./globalMenu-b6A2g6LS.js";import"./PersonCircle-CXU4a63k.js";import"./Buildings2-BkRGM6p9.js";import"./InboxFill-DmJ-MR8h.js";import"./MenuGrid-UaLQXTNS.js";import"./MagnifyingGlass-Dy-txje3.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BiGru9B5.js";import"./Trash-DpXv8-T-.js";import"./useLayout-C53uFV5F.js";import"./useLocale-PGLBmYGV.js";import"./header-v45MRMCQ.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Dy3YaaUo.js";import"./BookmarkSettingsItem-Bo5CypG2.js";import"./QueryLabel-CnM4ONJq.js";import"./Plus-1oHAiQB4.js";import"./SettingsItemBase-CySS0J0H.js";import"./ItemMedia-ZGWW7sv6.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./ChevronUp-5uVavT__.js";import"./ChevronDown-DHl1_IXJ.js";import"./ChevronRight-BWpY3hyQ.js";import"./ItemBase-CvuWU474.js";import"./ItemLink-DAE7sH1c.js";import"./ItemControls-Bpk8CkC-.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";import"./Typography-BbYlnfM1.js";import"./useHighlightedText-THgW7xGA.js";import"./ContextMenu-_PNq0coO.js";import"./useDropdownMenuController-fgAyTcqj.js";import"./Dropdown-CAWWJNvU.js";import"./SearchField-ClkEO99z.js";import"./FieldBase-DIosJ8GZ.js";import"./Field-nzKcMOXI.js";import"./Label-DHWqz8jc.js";import"./Input-Bk6KAWUZ.js";import"./MenuListItem-pRWVrCNm.js";import"./MenuListHeading-ITzk-OYW.js";import"./MenuItem-DLDMkBQ4.js";import"./Checkmark-ChhRzFzd.js";import"./ItemLabel-DCGYjoAC.js";import"./index-CvtktNDj.js";import"./InformationSquare-D9_tzfnx.js";import"./MenuElipsisHorizontal-Bwh4aScC.js";import"./Pencil-BdWdfQVK.js";import"./SkipLink-CZNC6AMl.js";import"./Banner-BtkWMuu4.js";import"./GlobalHeader-C0K-hU4h.js";import"./useIsDesktop-NTAS9CUx.js";import"./GlobalAccountButton-B6C1II4k.js";import"./Enter-DiGWFFtb.js";import"./GlobalMenuButton-CaKOaztv.js";import"./MenuHamburger-C33_VoLZ.js";import"./AccountSelector-DTLixZrl.js";import"./Switch-C8Xs5NQy.js";import"./AccountMenu-BTU2xb98.js";import"./GlobalMenu-mdYdEyJ4.js";import"./ArrowUndo-BT2qWUsa.js";import"./Globe-DlgMAhhy.js";import"./BreadcrumbsLink-C_aB2WWU.js";import"./ArrowRight-Eyt5oeY3.js";import"./Footer-Dh1VwpR_.js";import"./Flex-0kNayUnl.js";import"./ButtonGroup-BeLY82P-.js";import"./ButtonGroupDivider-DDdfhEZd.js";import"./ChevronUpDown-CBG_zYJo.js";import"./ToolbarMenu-dcLUQQlo.js";import"./ToolbarSearch-DSW05ZOw.js";import"./SettingsModal-DpPyb3um.js";import"./ModalBody-DLY4BfUv.js";import"./Section-CCbnuMor.js";import"./ButtonIcon-BF0TueQT.js";import"./ButtonLabel-Bhmgk5ut.js";import"./TextField-B36IzlVh.js";import"./inboxMenu-CBcJa9Ym.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
