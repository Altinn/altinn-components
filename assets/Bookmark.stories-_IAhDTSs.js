import{a7 as o}from"./iframe-Dai1liu3.js";import{u as S}from"./useProfileLayout-IDULXmBE.js";import{u as c,B as g}from"./useBookmarks-DNgsAS1o.js";import{L as k}from"./Layout-DJpVorRj.js";import{P as x}from"./PageBase-BoUparIw.js";import{H as p}from"./Heading-DmQEE02y.js";import{T as b}from"./Toolbar-rU-maSHY.js";import{B as I}from"./BookmarkModal-2ZJ-kB4q.js";import{u as h}from"./useInboxLayout-CJducPS8.js";import{u as f}from"./useAccountMenu-C4q_Myaw.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CVU2gC4U.js";import"./Bell-2PrMijso.js";import"./Bookmark-CV6vIl18.js";import"./ClockDashed-DzCDuBlo.js";import"./globalMenu-nGv3A5Ue.js";import"./PersonCircle-BxxgXUOQ.js";import"./Buildings2-DZT2vpBy.js";import"./InboxFill-DGxm99PO.js";import"./MenuGrid-DLDYj-qB.js";import"./MagnifyingGlass-Cr52GLsM.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CKAhmZ-n.js";import"./Trash-DCzB4pSB.js";import"./useLayout-DIKKlKXk.js";import"./useLocale-BQ5Oh3oY.js";import"./header-2nNsdQx_.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Cn8ytCIG.js";import"./BookmarkSettingsItem-D_9LqEC8.js";import"./QueryLabel-LZ0LjW5Y.js";import"./Plus-DL6goIlD.js";import"./SettingsItemBase-CpsNU8lU.js";import"./ItemMedia-BM0esdrg.js";import"./Avatar-BHjgyLeH.js";import"./AvatarGroup-BdaWfTQE.js";import"./ChevronUp-BdWuuKpV.js";import"./ChevronDown-BKPL2jIp.js";import"./ChevronRight-B3RrQIZJ.js";import"./ItemBase-DhwZCfor.js";import"./ItemLink-EKwWGdDt.js";import"./ItemControls-5TCj7bye.js";import"./Badge-CiXuPxpG.js";import"./Tooltip-Cf7V9gL4.js";import"./Typography-DKU5x7uE.js";import"./useHighlightedText-DBCcFNzk.js";import"./ContextMenu-D6E4TjJ4.js";import"./useDropdownMenuController-D6ah7-Cm.js";import"./Dropdown-qfadPHLV.js";import"./SearchField-RxPS0VwN.js";import"./FieldBase-CqsxpTvX.js";import"./Field-BZ_6UwHR.js";import"./Label-DZ5hnW4T.js";import"./Input-4lJD8g37.js";import"./MenuListItem-CU8Yw_FM.js";import"./MenuListDivider-wVnt0d0h.js";import"./MenuListHeading-uHuYXsTq.js";import"./MenuItem-Bmkwg1bx.js";import"./Checkmark-B5_y3YEn.js";import"./ItemLabel-B5CnFFsc.js";import"./InformationSquare-RpHoIVms.js";import"./MenuElipsisHorizontal-DksIAP7L.js";import"./Pencil-BpPUh0KN.js";import"./SkipLink-DENJv5fr.js";import"./Banner-CBwA0Xm0.js";import"./GlobalHeader-4BR8YOXY.js";import"./useIsDesktop-DXPdgN4a.js";import"./GlobalAccountButton-XUM0zLK1.js";import"./Enter-0p11sL2T.js";import"./GlobalMenuButton-CudCiNVY.js";import"./MenuHamburger-ClYiMoCo.js";import"./AccountSelector-BbOT5dd7.js";import"./Switch-D6R_arz0.js";import"./AccountMenu-DCeMOsKf.js";import"./GlobalMenu-BxW9IoAn.js";import"./ArrowUndo-iQjbo1Ik.js";import"./Globe-DmZe7dIi.js";import"./BreadcrumbsLink-Cho2xFO4.js";import"./ArrowRight-CoAZ71ey.js";import"./Footer-DOgDPmCe.js";import"./Flex-BVj8i7c1.js";import"./ButtonGroup-D4ZwjyVx.js";import"./ButtonGroupDivider-CWzPtEJ0.js";import"./ChevronUpDown-B8adeKoD.js";import"./ToolbarMenu-BZHi4So0.js";import"./ToolbarSearch-C9jTaTiQ.js";import"./SettingsModal-ZO1TvAQM.js";import"./ModalBody-DInWXo4g.js";import"./Section-SIo_MtMG.js";import"./ButtonIcon-MD5DjO6C.js";import"./ButtonLabel-DLfBXBU4.js";import"./TextField-DVbi06pN.js";import"./inboxMenu-rH02hJT3.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
