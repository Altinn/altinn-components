import{a7 as o}from"./iframe-DxDA2A5n.js";import{u as S}from"./useProfileLayout-DNLpQhja.js";import{u as c,B as g}from"./useBookmarks-DioW8eY4.js";import{L as k}from"./Layout-BAI3eunZ.js";import{P as x}from"./PageBase-D9YJoHv6.js";import{H as p}from"./Heading-CDQRp2wK.js";import{T as b}from"./Toolbar-D6hwWtls.js";import{B as I}from"./BookmarkModal-C6EEyfhA.js";import{u as h}from"./useInboxLayout-aWH-UMOI.js";import{u as f}from"./useAccountMenu-CLz_Znrm.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-D6SH56Jk.js";import"./Bell-Bl_Cp7ct.js";import"./Bookmark-DPqwRFOB.js";import"./ClockDashed-B7pSLbPh.js";import"./globalMenu-DA45JJBH.js";import"./PersonCircle-Cl8qDIya.js";import"./Buildings2-BHAYTXA3.js";import"./InboxFill-DcUbEHeg.js";import"./MenuGrid-BnnvUGyZ.js";import"./MagnifyingGlass-CEr-rPcN.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BP8GRpZJ.js";import"./Trash-Cq15ZLAx.js";import"./useLayout-C1wJccUe.js";import"./useLocale-CjscI9ov.js";import"./header-DtzApzwV.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CesabFz-.js";import"./BookmarkSettingsItem-B_o0Pq-b.js";import"./QueryLabel-Bj_jripS.js";import"./Plus-BRpGG8-t.js";import"./SettingsItemBase-ly1O-6oF.js";import"./ItemMedia-CnqN7ZMq.js";import"./Avatar-CZW-u89b.js";import"./AvatarGroup-nVAkNLkO.js";import"./ChevronUp-ChUSKAgV.js";import"./ChevronDown-Cl8SGDa2.js";import"./ChevronRight-B7TpiReR.js";import"./ItemBase-kZocBRUl.js";import"./ItemLink-DTz0HDfI.js";import"./ItemControls-BB5vmDik.js";import"./Badge-DAAwIuMb.js";import"./Tooltip-ClLj-W4n.js";import"./Typography-BpmyNFuo.js";import"./useHighlightedText-CKLIlaha.js";import"./ContextMenu-7PiEHvyZ.js";import"./useDropdownMenuController-CF0cOpjK.js";import"./Dropdown-BtLUP2GJ.js";import"./SearchField-m29TWzvo.js";import"./FieldBase-D6edMMqi.js";import"./Field-DCiIS6vX.js";import"./Label-Du-ZQ2TI.js";import"./Input-DR3-2m3e.js";import"./MenuListItem-CLXsOloJ.js";import"./MenuListHeading-JM3VtJKJ.js";import"./MenuItem-DvVfNxyY.js";import"./Checkmark-NOoe9XBa.js";import"./ItemLabel-pZuDHhkH.js";import"./index-BrQU956K.js";import"./InformationSquare-D_k5oT3G.js";import"./MenuElipsisHorizontal-LmdkdYP-.js";import"./Pencil-QMYxfCej.js";import"./SkipLink-CR6gNYnp.js";import"./Banner-BoWc2ajf.js";import"./GlobalHeader-nX9Hnel7.js";import"./useIsDesktop-RJ_PrM3C.js";import"./GlobalAccountButton-BxZcOP3U.js";import"./Enter-BtGZyTuG.js";import"./GlobalMenuButton-BEhXHvT6.js";import"./MenuHamburger-SuiAu3Wg.js";import"./AccountSelector-C-M1O6Hc.js";import"./Switch-yAEuxwZz.js";import"./AccountMenu-Rflthn1L.js";import"./GlobalMenu-DAsJ4E4k.js";import"./ArrowUndo-kdrF5Cj9.js";import"./Globe-Cj3PifZU.js";import"./BreadcrumbsLink-Dll_MhVD.js";import"./ArrowRight-BGnV3_uY.js";import"./Footer-xUhwf7dH.js";import"./Flex-CfINokNW.js";import"./ButtonGroup-BwP7xmaH.js";import"./ButtonGroupDivider-HP7rml0w.js";import"./ChevronUpDown-stIG4MLK.js";import"./ToolbarMenu-Dx4QRTRT.js";import"./ToolbarSearch-CQHsR4lb.js";import"./SettingsModal-DloPD4cW.js";import"./ModalBody-D3jXQH23.js";import"./Section-BxDgugwi.js";import"./ButtonIcon-qeGPxIpM.js";import"./ButtonLabel-B4aFnIiY.js";import"./TextField-DdAaSiak.js";import"./inboxMenu-CL_n87Gs.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
