import{j as o}from"./iframe-xsOFb0qB.js";import{u as h}from"./useInboxLayout-Dw-tzyL7.js";import{u as j}from"./useAccountMenu-S2tlqrVp.js";import{u as c,B as g}from"./useBookmarks-Bt5Hm3Fy.js";import{L as k}from"./Layout-63w11HZc.js";import{P as x}from"./PageBase-BmzZTWtK.js";import{H as p}from"./Heading-CKV0OzUJ.js";import{T as b}from"./Toolbar-CDDewou6.js";import{B as I}from"./BookmarkModal-DCiUs8R9.js";import{u as S}from"./useProfileLayout-DRJtaytv.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-BkpGWvyy.js";import"./InboxFill-D-JS-mTH.js";import"./useId-BSkX16Wf.js";import"./Plus-CO7gw69x.js";import"./PersonCircle-CQxK2wwo.js";import"./Bookmark-CORWw_ar.js";import"./Archive-B1CaQo-V.js";import"./Trash-CZXvsvHs.js";import"./InformationSquare-DdLgqmyX.js";import"./globalMenu-7gz2NZeF.js";import"./Buildings2-C62e6IVW.js";import"./MenuGrid-B4fGNlZg.js";import"./MagnifyingGlass--8bC5kd2.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-Dhg-h9Qc.js";import"./useLocale-ZIxXDciE.js";import"./header-B3Zd00EL.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-BI770wDo.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DwtqdLCy.js";import"./QueryLabel-Dh4OgX92.js";import"./SettingsItemBase-Bj8jNJ8o.js";import"./ChevronUp-DtTCTXgH.js";import"./ChevronDown-DgTX1k3o.js";import"./ChevronRight-C-KQY4Ee.js";import"./ItemLink-D5ErANnm.js";import"./index-C2Njje4x.js";import"./ItemMedia-J6PAjnJS.js";import"./XMark-CIyVPbna.js";import"./Avatar-n4A0Yiev.js";import"./Skeleton-DBfNAA4T.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Icon-Bfs0jdaJ.js";import"./ItemControls-a4lEiOE5.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-Bx2c3_US.js";import"./useHighlightedText-DlnkJmvJ.js";import"./ContextMenu-BmVXKH9P.js";import"./useDropdownMenuController-B1fyKvdT.js";import"./Dropdown-DSeVnfau.js";import"./MenuElipsisHorizontal-KvoLWB-I.js";import"./SearchField-CkGqv4yc.js";import"./FieldBase-CVHmMMmY.js";import"./Label-CiIlYW7w.js";import"./index-CZjeF-Ef.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./MenuItem-Dd-G4Q8o.js";import"./Checkmark-Bxt0Ippd.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./Pencil-BlrCYHOq.js";import"./SkipLink-p0ZoOJBX.js";import"./Banner-CxykjrH7.js";import"./GlobalHeader-BNGWRcMX.js";import"./useIsDesktop-BOJmI6K-.js";import"./GlobalAccountButton-DLmWsdQk.js";import"./Enter-BCbm_6pK.js";import"./GlobalMenuButton-Nv-QckX_.js";import"./MenuHamburger-C-E3l7C-.js";import"./AccountSelector-CmriLCRY.js";import"./heading-CqwOf3GZ.js";import"./AccountMenu-CByUaCt_.js";import"./Switch-D_4hH0ed.js";import"./GlobalMenu-LDEud2c5.js";import"./ArrowUndo-Bgr0ttn6.js";import"./Globe-Bo46H1tU.js";import"./BreadcrumbsLink-BjSgfYGY.js";import"./ArrowRight-B1uo4i5X.js";import"./Footer-CZQuPie9.js";import"./Flex-D9aEciRT.js";import"./ChevronUpDown-C9PCSFtE.js";import"./ButtonGroup-C6oYdo0U.js";import"./ButtonGroupDivider-Di2QHo3H.js";import"./ToolbarMenu-tkAvaKQM.js";import"./ToolbarSearch-B_S7wHi8.js";import"./SettingsModal-DY4S-rNA.js";import"./ModalBody-CU-34hyC.js";import"./Section-B92vWqdI.js";import"./ButtonIcon-CgcH6LiT.js";import"./ButtonLabel-BYEs_GZq.js";import"./TextField-BfoCX5sC.js";import"./Bell-lzchwu9E.js";import"./ClockDashed-B79nfQIW.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
