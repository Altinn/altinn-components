import{j as o}from"./iframe-BUZW8AMM.js";import{u as h}from"./useInboxLayout-BBE-DNxj.js";import{u as j}from"./useAccountMenu-aefej9YR.js";import{u as c,B as g}from"./useBookmarks-9vTMfwpA.js";import{L as k}from"./Layout-BtNZqBvp.js";import{P as x}from"./PageBase-DuZT8m5x.js";import{H as p}from"./Heading-BBJzhiZm.js";import{T as b}from"./Toolbar-44ANOcfq.js";import{B as I}from"./BookmarkModal-BJs0U_Hh.js";import{u as S}from"./useProfileLayout-DrHZbF90.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-BtE-eaGS.js";import"./InboxFill-CTf7tvg-.js";import"./useId-CoMggIDA.js";import"./Plus-BWMMx9bM.js";import"./PersonCircle-Dp7Qthqx.js";import"./Bookmark-BKPiN4UC.js";import"./Archive-BF40uVhW.js";import"./Trash-CBYCI39t.js";import"./InformationSquare-D87nn8LZ.js";import"./globalMenu-DyKOSCyj.js";import"./Buildings2-B67cXEvc.js";import"./MenuGrid-gCFTtwbJ.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-BSYWmMLB.js";import"./useLocale-Di8vUl15.js";import"./header-w4plCkPS.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-swP0PXTG.js";import"./Button-gpqpzK6E.js";import"./button-Bzfkec0d.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-Dz1K3E_z.js";import"./QueryLabel-DmTAUC8y.js";import"./SettingsItemBase-DZ_I7vZA.js";import"./ChevronUp-Cmvg9ZuE.js";import"./ChevronDown-C7e7c8oq.js";import"./ChevronRight-Be2F8dIE.js";import"./ItemLink-pH7m12-R.js";import"./index-DDG5Qp_D.js";import"./ItemMedia-lV46z_8W.js";import"./XMark-N_5CtkVA.js";import"./Avatar-VmI9f2FC.js";import"./Skeleton-2WT-jYKy.js";import"./AvatarGroup-BSpRcNGO.js";import"./Icon-pO_LYxKU.js";import"./ItemControls-CILw3fe6.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-DPxU9lqg.js";import"./useHighlightedText-Df1F8nSN.js";import"./ContextMenu-DWxhfZ1J.js";import"./useDropdownMenuController-ocgtyANg.js";import"./Dropdown-B9D2leTq.js";import"./MenuElipsisHorizontal-Dq6dZaad.js";import"./SearchField-DOgIBcSC.js";import"./FieldBase-D0VPfoZq.js";import"./Label-EV3PcI6g.js";import"./index-BxrYGQ_D.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuListHeading-BbGKJ44d.js";import"./MenuItem-B9Qpze_W.js";import"./Checkmark-B1cvuYYq.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";import"./Pencil-C7V01fPG.js";import"./SkipLink-BH85XRTj.js";import"./Banner-CHaR_lTw.js";import"./GlobalHeader-CwtldYy5.js";import"./useIsDesktop-B3Kf1_kp.js";import"./GlobalAccountButton-ChDH8eEo.js";import"./Enter-QOjqzb8v.js";import"./GlobalMenuButton-BTY7MIVd.js";import"./MenuHamburger-BwbXv_3L.js";import"./AccountSelector-BdLq9o7q.js";import"./heading-yFKmy4mk.js";import"./AccountMenu-DzDo23pz.js";import"./Switch-CFAy6nJV.js";import"./GlobalMenu-DLMrNCvB.js";import"./ArrowUndo-DP3wQisr.js";import"./Globe-ghm5oPz9.js";import"./BreadcrumbsLink-yC0UMR4E.js";import"./ArrowRight-DDuYd5Sn.js";import"./Footer-C9UkhiRm.js";import"./Flex-ErkwFvdj.js";import"./ChevronUpDown-DyYbhZIM.js";import"./ButtonGroup-BdRMlEte.js";import"./ButtonGroupDivider-DSjna6gU.js";import"./ToolbarMenu-1Q9tH7De.js";import"./ToolbarSearch-D2snndR4.js";import"./SettingsModal-2DOGG5hN.js";import"./ModalBody-BtJGyYre.js";import"./Section-DQEzrtai.js";import"./ButtonIcon-DbIrT_gT.js";import"./ButtonLabel-CQvjwTEk.js";import"./TextField-De0Y2qe5.js";import"./Bell-CInWcKsn.js";import"./ClockDashed-D1Qaa07F.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
