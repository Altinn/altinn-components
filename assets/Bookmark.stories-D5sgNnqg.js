import{a7 as o}from"./iframe-CDUjh_2z.js";import{u as S}from"./useProfileLayout-DLriqpxB.js";import{u as c,B as g}from"./useBookmarks-B6T5S1C-.js";import{L as k}from"./Layout-Clzy8C9-.js";import{P as x}from"./PageBase-BhGFwxkR.js";import{H as p}from"./Heading-DX7LPsCl.js";import{T as b}from"./Toolbar-BmDWl1Wb.js";import{B as I}from"./BookmarkModal-CHCpcvuO.js";import{u as h}from"./useInboxLayout-I4qk23YP.js";import{u as f}from"./useAccountMenu-zxAlAouQ.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CU0oPSEK.js";import"./Bell-BkQcA-tT.js";import"./Bookmark-C6csqz55.js";import"./ClockDashed-6t3uCpF_.js";import"./globalMenu-BcM4hSn0.js";import"./PersonCircle-BDpPcxzb.js";import"./Buildings2-BCItUeY7.js";import"./InboxFill-Bsc4AfQF.js";import"./MenuGrid-BAWE-3hk.js";import"./MagnifyingGlass-Dn7hqdrb.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BJIbGZn4.js";import"./Trash-0-27J6Eh.js";import"./useLayout-Lg5Z56qP.js";import"./useLocale-DVIfSYWN.js";import"./header-HzjlBqFo.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CCO_lxMe.js";import"./BookmarkSettingsItem-DvnSPKtj.js";import"./QueryLabel-YAE07W5y.js";import"./Plus-BtkWHSVH.js";import"./SettingsItemBase-DK_EOKe4.js";import"./ItemMedia-Bai-Urcu.js";import"./Avatar-CxwAqCY2.js";import"./AvatarGroup-BYI_T_-3.js";import"./ChevronUp-B_5rOd5t.js";import"./ChevronDown-BUU9mFY7.js";import"./ChevronRight-CG3NwLwQ.js";import"./ItemBase-vEAAYhB2.js";import"./ItemLink-6wM2985X.js";import"./ItemControls-Kup6bLJb.js";import"./Badge-9wdqlOC-.js";import"./Tooltip-rnvLebTi.js";import"./Typography-HCvo8I75.js";import"./useHighlightedText-DcMy2tkL.js";import"./ContextMenu-D3Cy3w9b.js";import"./useDropdownMenuController-DBEdm3zN.js";import"./Dropdown-Cq9y5l3q.js";import"./SearchField-D9cu5VJD.js";import"./FieldBase-CC2tJByH.js";import"./Field-BLni3K_t.js";import"./Label-BeOd8owz.js";import"./Input-CyWHlPcl.js";import"./MenuListItem-CGgNB0ZA.js";import"./MenuListHeading-DztGiWDu.js";import"./MenuItem-GdPNBIG6.js";import"./Checkmark-DLLLSSlc.js";import"./ItemLabel-Cz51yrrd.js";import"./index-BAc6HH-X.js";import"./InformationSquare-CT1i7ej7.js";import"./MenuElipsisHorizontal-Ce-EEiTj.js";import"./Pencil-CWKCGX6N.js";import"./SkipLink-DAr2beFj.js";import"./Banner-BJWNA3Mr.js";import"./GlobalHeader-DGA7DqaJ.js";import"./useIsDesktop-DP7wam1j.js";import"./GlobalAccountButton-CsTmajHT.js";import"./Enter-CRniGYFa.js";import"./GlobalMenuButton-CRXTMqKw.js";import"./MenuHamburger-CKCKhSKS.js";import"./AccountSelector-_TaMLnZT.js";import"./Switch-BsB9C13J.js";import"./AccountMenu-_5VktjzI.js";import"./GlobalMenu-DBasIg4L.js";import"./ArrowUndo-CzbSWIbd.js";import"./Globe-BKGQk3fV.js";import"./BreadcrumbsLink-BK8g_MEW.js";import"./ArrowRight-D9kIYyTz.js";import"./Footer-4DjpfKHj.js";import"./Flex-Bc1_yHC5.js";import"./ButtonGroup-Bu9UDZzJ.js";import"./ButtonGroupDivider-BvQ9mykg.js";import"./ChevronUpDown-XOGKv2jc.js";import"./ToolbarMenu-D8UlXWTF.js";import"./ToolbarSearch-DW2NN7vI.js";import"./SettingsModal-DYhCA59-.js";import"./ModalBody-BznBWo4M.js";import"./Section-xHms6zkB.js";import"./ButtonIcon-BlI-wN7T.js";import"./ButtonLabel-C8ei22k7.js";import"./TextField-CAPXyLNN.js";import"./inboxMenu-Cltgb-5h.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
