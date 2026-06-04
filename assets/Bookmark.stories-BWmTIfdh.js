import{a7 as o}from"./iframe-bg3nhc5C.js";import{u as S}from"./useProfileLayout-B830tJj2.js";import{u as c,B as g}from"./useBookmarks-UMN5nhtC.js";import{L as k}from"./Layout-DbGppvai.js";import{P as x}from"./PageBase-C6PWmORh.js";import{H as p}from"./Heading-CqXKSZEg.js";import{T as b}from"./Toolbar-DWAoZWct.js";import{B as I}from"./BookmarkModal-DzenJoU3.js";import{u as h}from"./useInboxLayout-BSrRY4Am.js";import{u as f}from"./useAccountMenu-C16xZZnT.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-C7iU4Ihv.js";import"./Bell-D4GENIpw.js";import"./Bookmark-DoKFo2MC.js";import"./ClockDashed-qgCdVrzi.js";import"./globalMenu-D77TSP5q.js";import"./PersonCircle-ZHY_XpTK.js";import"./Buildings2-CqKv-u_K.js";import"./InboxFill-Bi-6tN0q.js";import"./MenuGrid-uFWPUVY-.js";import"./MagnifyingGlass-C3fVRdM8.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CB_LO-X7.js";import"./Trash-Dwyh85Wc.js";import"./useLayout-CEXBX2Kf.js";import"./useLocale-B4PNEpLc.js";import"./header-gBAbq1A_.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DS82y3su.js";import"./BookmarkSettingsItem-BD5q6-AE.js";import"./QueryLabel-CBnA5vPq.js";import"./Plus-T7SFOg3q.js";import"./SettingsItemBase-D_4-RuwQ.js";import"./ItemMedia-CxijgI7U.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./ChevronUp-DDZW1UU0.js";import"./ChevronDown-DjIEzGIr.js";import"./ChevronRight-fbKP0qVJ.js";import"./ItemBase-D5zPuNeb.js";import"./ItemLink-Cxg09-QY.js";import"./ItemControls-vsK4YZNK.js";import"./Badge-hZ6rpuJP.js";import"./Tooltip-BG2MYXE2.js";import"./Typography-Ci1MUa-H.js";import"./useHighlightedText-Ct2V138i.js";import"./ContextMenu-BEQqNyYm.js";import"./useDropdownMenuController-CwIh1DiK.js";import"./Dropdown-CqGqZ6my.js";import"./SearchField-CjXdfZ37.js";import"./FieldBase-CPws21pp.js";import"./Field-DXeetSkN.js";import"./Label-BY0S3EO2.js";import"./Input-ByvRROIc.js";import"./MenuListItem-f8-xfgbP.js";import"./MenuListHeading-CPNZr4rU.js";import"./MenuItem-Dnd2bkX1.js";import"./Checkmark-D_j4oKhD.js";import"./ItemLabel-D9bNrZqJ.js";import"./index-cKgDDIaZ.js";import"./InformationSquare-BrXIcqKH.js";import"./MenuElipsisHorizontal-CKVexCzt.js";import"./Pencil-Dse0QxSq.js";import"./SkipLink-ErdrsmAc.js";import"./Banner-B6oDKj9_.js";import"./GlobalHeader-DTtVb6RE.js";import"./useIsDesktop-BPgxFBNN.js";import"./GlobalAccountButton-DmQYm9X_.js";import"./Enter-Bsfd8W3r.js";import"./GlobalMenuButton-DKrunHI2.js";import"./MenuHamburger-COo8Z9YV.js";import"./AccountSelector-BkKbokx0.js";import"./Switch-CmEosvvM.js";import"./AccountMenu-BZxvQYdp.js";import"./GlobalMenu-DdWdZSiA.js";import"./ArrowUndo-aIXjtX94.js";import"./Globe-tjr1QJXu.js";import"./BreadcrumbsLink-VxLZ3mrA.js";import"./ArrowRight-CUr7cz5B.js";import"./Footer-DhRHdCJp.js";import"./Flex-CxgPTFrH.js";import"./ButtonGroup-BzB2tyZw.js";import"./ButtonGroupDivider-Cye-61mv.js";import"./ChevronUpDown-Bdm9ft9T.js";import"./ToolbarMenu-GuoKeltm.js";import"./ToolbarSearch-CA5X9J2B.js";import"./SettingsModal-BOtM7eQZ.js";import"./ModalBody-CViOeQEG.js";import"./Section-0QuSZB3S.js";import"./ButtonIcon-Bj-DkHCc.js";import"./ButtonLabel-ga4a8HUc.js";import"./TextField-9MWE8u_5.js";import"./inboxMenu-Dv_Yuweg.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
