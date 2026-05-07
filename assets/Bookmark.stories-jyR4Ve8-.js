import{j as o}from"./iframe-Nkxls2w0.js";import{u as h}from"./useInboxLayout-DICg4tI5.js";import{u as j}from"./useAccountMenu-Bic09Mnl.js";import{u as c,B as g}from"./useBookmarks-DqXeILxh.js";import{L as k}from"./Layout-zkHRE3mb.js";import{P as x}from"./PageBase-DyibXuz6.js";import{H as p}from"./Heading-AZ4WQ_-Y.js";import{T as b}from"./Toolbar-D-GGCzOD.js";import{B as I}from"./BookmarkModal-DO0fVH_I.js";import{u as S}from"./useProfileLayout-47EAVwfG.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-D3lXAmXu.js";import"./InboxFill-o2E1Tsdv.js";import"./useId-C8J5yFeN.js";import"./Plus-DIAMQcGN.js";import"./PersonCircle-Cn0cICkm.js";import"./Bookmark-Ae2OhZ5O.js";import"./Archive-BdfF2mlS.js";import"./Trash-3ZsUZg5A.js";import"./InformationSquare-zR5D--CT.js";import"./globalMenu-CR74OuXv.js";import"./Buildings2-Cwc84w3B.js";import"./MenuGrid-CQppVPlk.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-BUINXsXR.js";import"./useLocale-hXumCrC-.js";import"./header-B6-vXvqb.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-DW-S_Xm4.js";import"./Button-Ds9vuGVD.js";import"./button-CK59nDyy.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-CoJ6Ea9t.js";import"./QueryLabel-C-N0DPNI.js";import"./SettingsItemBase-AQpsglss.js";import"./ChevronUp-UjgZK29V.js";import"./ChevronDown-DGUtPuYx.js";import"./ChevronRight-Bcpq3qt2.js";import"./ItemLink-CJbh8GaA.js";import"./index-M4TkGQLb.js";import"./ItemMedia-CsEr1Zw1.js";import"./XMark-D-ALqV0n.js";import"./Avatar-BDGJojEv.js";import"./Skeleton-DNS4c1Rp.js";import"./AvatarGroup-BM9A-Bel.js";import"./Icon-qDX4JAC4.js";import"./ItemControls-BH6jrH_o.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-CZZfCvh6.js";import"./useHighlightedText-BtUjP4Uj.js";import"./ContextMenu-BNXGj103.js";import"./useDropdownMenuController-BB48Tjgy.js";import"./Dropdown-D5aFsl9a.js";import"./MenuElipsisHorizontal-CFVZ-H4Q.js";import"./SearchField-Bb3Ffka2.js";import"./FieldBase-Drb41XPf.js";import"./Label-DRBFvXSF.js";import"./index-Bvwkp7W_.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuListHeading-CEofuJGo.js";import"./MenuItem-edMrv6Qw.js";import"./Checkmark-DHusaxnp.js";import"./useMenu-WCeLZ4vF.js";import"./Pencil-Bke20GIE.js";import"./SkipLink-C3eAUp5R.js";import"./Banner-CR2T8d4d.js";import"./GlobalHeader-C43hCrm7.js";import"./useIsDesktop-B3v56MMA.js";import"./GlobalAccountButton-1LpwA0ez.js";import"./Enter-B5kYaJFx.js";import"./GlobalMenuButton-DgZ1n528.js";import"./MenuHamburger-RVcJ4Btq.js";import"./AccountSelector-BgAPchbc.js";import"./heading-DBVrBNvc.js";import"./AccountMenu-BBk-Oh_e.js";import"./Switch-C1jPtUo5.js";import"./GlobalMenu-DJxhhp8Y.js";import"./ArrowUndo-DCCluNxu.js";import"./Globe-0ZUE1Hkm.js";import"./BreadcrumbsLink-BuCc8KvJ.js";import"./ArrowRight-fyKGUXd8.js";import"./Footer-Blb1oOVu.js";import"./Flex-BbiGghB8.js";import"./ChevronUpDown-Cc1V6X6m.js";import"./ButtonGroup-HCy2ouFP.js";import"./ButtonGroupDivider-BRcd2kIA.js";import"./ToolbarMenu-D2G4eQ7e.js";import"./ToolbarSearch-Bt1qoil4.js";import"./SettingsModal-CxkoOWEY.js";import"./ModalBody-BW4Wp4B4.js";import"./Section-DtOfuDKh.js";import"./ButtonIcon-Du8IWwj9.js";import"./ButtonLabel-CHOaFLZI.js";import"./TextField-bLFklYeL.js";import"./Bell-CEK3Kam3.js";import"./ClockDashed-BquqWz1S.js";const je={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const Se=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,Se as __namedExportsOrder,je as default};
