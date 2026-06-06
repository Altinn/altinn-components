import{a7 as o}from"./iframe-azCfu0oF.js";import{u as S}from"./useProfileLayout-DjXEsdAG.js";import{u as c,B as g}from"./useBookmarks-CyOkLP9K.js";import{L as k}from"./Layout-DYtuN4Mv.js";import{P as x}from"./PageBase-CfjNSHks.js";import{H as p}from"./Heading-BxIru1wm.js";import{T as b}from"./Toolbar-B5WPJejb.js";import{B as I}from"./BookmarkModal-DywYUdUu.js";import{u as h}from"./useInboxLayout-DoiROhpY.js";import{u as f}from"./useAccountMenu-Boy03MvL.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CKB0G2IA.js";import"./Bell-DgbE607u.js";import"./Bookmark-DpB-3DiS.js";import"./ClockDashed-DU4j5opN.js";import"./globalMenu-CbTnY7g_.js";import"./PersonCircle-DtDFP3uD.js";import"./Buildings2-vZnco-8R.js";import"./InboxFill-CwRadsxH.js";import"./MenuGrid-CpQuJPtt.js";import"./MagnifyingGlass-sqIKuSMh.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Brae8BXQ.js";import"./Trash-4gML0aCb.js";import"./useLayout-CClZvm5q.js";import"./useLocale-B046KNXg.js";import"./header-MhIhlDaj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BCjKWSQ9.js";import"./BookmarkSettingsItem-CWJf2Qrg.js";import"./QueryLabel-CWfxX5F4.js";import"./Plus-BRb5Dr-V.js";import"./SettingsItemBase-QxuxVgeV.js";import"./ItemMedia-BlulKlBL.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./ChevronUp-_1tTwlgk.js";import"./ChevronDown-D-2Ujwox.js";import"./ChevronRight-DmbA9yvG.js";import"./ItemBase-DvAzRiVb.js";import"./ItemLink-iPqP_Q-k.js";import"./ItemControls-D1geOcjK.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./Typography-CWMVViTm.js";import"./useHighlightedText-BA5UWeOm.js";import"./ContextMenu-B48YoW8-.js";import"./useDropdownMenuController-Ds5tbgH_.js";import"./Dropdown-CZ8Ag1Ok.js";import"./SearchField-BxcNLwFn.js";import"./FieldBase-CGNAcfuA.js";import"./Field-DqJ_4ymP.js";import"./Label-Fg6nLSp0.js";import"./Input-B4WsPqAp.js";import"./MenuListItem-BqMqYYtc.js";import"./MenuListHeading-Be6eRNXB.js";import"./MenuItem-DQe7kQkg.js";import"./Checkmark-DMfmeL08.js";import"./ItemLabel-CkTR7bil.js";import"./index-BVE0v-uN.js";import"./InformationSquare-jmbeCJCU.js";import"./MenuElipsisHorizontal-CTevO2o7.js";import"./Pencil-542yRJA3.js";import"./SkipLink-Dd0mmfHI.js";import"./Banner-CAZ4bFf-.js";import"./GlobalHeader-Di3unPEh.js";import"./useIsDesktop-VQy6LI36.js";import"./GlobalAccountButton-CK8T4LQh.js";import"./Enter-tZOygt0a.js";import"./GlobalMenuButton-Cj8YDFpo.js";import"./MenuHamburger-8q16ML3A.js";import"./AccountSelector-BSoQQv0t.js";import"./Switch-CLshW7kB.js";import"./AccountMenu-l9LBS8EX.js";import"./GlobalMenu-gYE2kqRH.js";import"./ArrowUndo-DFHXaMj5.js";import"./Globe-fNOxnyKD.js";import"./BreadcrumbsLink-BjLFHRtF.js";import"./ArrowRight-2WuhP0xh.js";import"./Footer-DkE5zY5y.js";import"./Flex-Dtc9ln1d.js";import"./ButtonGroup-n2_tAFRz.js";import"./ButtonGroupDivider-pw-6OYtl.js";import"./ChevronUpDown-BeVvnKq-.js";import"./ToolbarMenu-CZsZgWTt.js";import"./ToolbarSearch-WBGy0rj6.js";import"./SettingsModal-DgA94iaR.js";import"./ModalBody-DGD_YXs5.js";import"./Section-cdVnHieS.js";import"./ButtonIcon-CwW43bfK.js";import"./ButtonLabel-C-fKFqCV.js";import"./TextField-i3cTYrXw.js";import"./inboxMenu-CdbkDalU.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
