import{a7 as o}from"./iframe-KbHODQgb.js";import{u as S}from"./useProfileLayout-BZrkaF3L.js";import{u as c,B as g}from"./useBookmarks-OQLJOzVm.js";import{L as k}from"./Layout-zPH4fyD9.js";import{P as x}from"./PageBase-BiQLhiZo.js";import{H as p}from"./Heading-jxV4Y0yK.js";import{T as b}from"./Toolbar-BJYj1e1Y.js";import{B as I}from"./BookmarkModal-DVPqglO8.js";import{u as h}from"./useInboxLayout-BWb2k8Xr.js";import{u as f}from"./useAccountMenu-DqwVjPm-.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-D_GdJ6TD.js";import"./Bell-B1NfZyuE.js";import"./Bookmark-CMKRXxOZ.js";import"./ClockDashed-BViIBFFY.js";import"./globalMenu--h1A6fPQ.js";import"./PersonCircle-DCtiKJYx.js";import"./Buildings2-B7ePRcqB.js";import"./InboxFill-n5sUwVFs.js";import"./MenuGrid-TcyXoz86.js";import"./MagnifyingGlass-Db52e0Xc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-D0FcTHIV.js";import"./Trash-Af7bx1Lq.js";import"./useLayout-BbMnQCVD.js";import"./useLocale-fn_8TFMQ.js";import"./header-CHwP2tYE.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-veT1adJt.js";import"./BookmarkSettingsItem-Croif9Wd.js";import"./QueryLabel-Dl9509cP.js";import"./Plus-DWfYvBf0.js";import"./SettingsItemBase-DG21eKyz.js";import"./ItemMedia-vwuqAhM8.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./ChevronUp-DjGQTIt5.js";import"./ChevronDown-DDGA5gfO.js";import"./ChevronRight-wplb_UH2.js";import"./ItemBase-CTCHDdfF.js";import"./ItemLink-NIMU7q5y.js";import"./ItemControls-BYcmr1lT.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./Typography-C9K693Jo.js";import"./useHighlightedText-uGguOCwY.js";import"./ContextMenu-DeNRHsXv.js";import"./useDropdownMenuController-C2TGyR2O.js";import"./Dropdown-2MkuZ1sA.js";import"./SearchField-BOprvfZ0.js";import"./FieldBase-Vfg8qV6A.js";import"./Field-B8zKs9Bz.js";import"./Label-C3jcdxRS.js";import"./Input-DwLHHyGz.js";import"./MenuListItem-D3mLd2IU.js";import"./MenuListHeading-BPNZa_yh.js";import"./MenuItem-BP2R6FfU.js";import"./Checkmark-CO83o23q.js";import"./ItemLabel-BW6ywGNt.js";import"./index-DNTFCYRR.js";import"./InformationSquare-DCyKofJQ.js";import"./MenuElipsisHorizontal-CV5BoB6D.js";import"./Pencil-BxnGjHRb.js";import"./SkipLink-Blj0zeEn.js";import"./Banner-CuUdzJys.js";import"./GlobalHeader-BpANGVsD.js";import"./useIsDesktop-vNPzihpg.js";import"./GlobalAccountButton-DaatQQtc.js";import"./Enter-CpZn4cxl.js";import"./GlobalMenuButton-XZi3ovFK.js";import"./MenuHamburger-CMlucM-D.js";import"./AccountSelector-NahkJjx4.js";import"./Switch-ym8FDDIw.js";import"./AccountMenu-DeYCZtkw.js";import"./GlobalMenu-BdpiVZy2.js";import"./ArrowUndo-Czf3yvOi.js";import"./Globe-Bqq8HH8f.js";import"./BreadcrumbsLink-Dur88p81.js";import"./ArrowRight-B3wkdOFg.js";import"./Footer-okdGhFgd.js";import"./Flex-DJYB_We1.js";import"./ButtonGroup-D1R72gzy.js";import"./ButtonGroupDivider-Bgv434RO.js";import"./ChevronUpDown-DI9yxsG7.js";import"./ToolbarMenu-CXd-6wki.js";import"./ToolbarSearch-DkxFBCXf.js";import"./SettingsModal-_8PcUVyb.js";import"./ModalBody-BLUO0OyV.js";import"./Section-BQYKGPm8.js";import"./ButtonIcon-J3Dvocxh.js";import"./ButtonLabel-S0TUviQT.js";import"./TextField-BjErri7K.js";import"./inboxMenu-DFNRjkHk.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
