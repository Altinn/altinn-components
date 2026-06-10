import{a7 as o}from"./iframe-B8reGtNb.js";import{u as S}from"./useProfileLayout-COFaWQ0h.js";import{u as c,B as g}from"./useBookmarks-CEPDhFy0.js";import{L as k}from"./Layout-BtIVNKSD.js";import{P as x}from"./PageBase-BxTPhJa3.js";import{H as p}from"./Heading-Cybus3jr.js";import{T as b}from"./Toolbar-D2RYFt88.js";import{B as I}from"./BookmarkModal-DQ0f9AR2.js";import{u as h}from"./useInboxLayout-DuttU7ux.js";import{u as f}from"./useAccountMenu-RI6BdrHE.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-Cd3MetJy.js";import"./Bell-jZVV-fm0.js";import"./Bookmark-BkYwOVnq.js";import"./ClockDashed-Bck2BPa9.js";import"./globalMenu-CAHdZk2u.js";import"./PersonCircle-8zq8UCe7.js";import"./Buildings2-yXpbPS2f.js";import"./InboxFill-DZO1RCYN.js";import"./MenuGrid-DUOkUJ_e.js";import"./MagnifyingGlass-CBDfQb5g.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DhWzN6pb.js";import"./Trash-BwJUxhUJ.js";import"./useLayout-DyDpIziV.js";import"./useLocale-DuxjwPpw.js";import"./header-CT-kzGQY.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-G7RJHCVr.js";import"./BookmarkSettingsItem-DHvuIKv6.js";import"./QueryLabel-DSQbBYwx.js";import"./Plus-Ck-NVedy.js";import"./SettingsItemBase-CCVK-afE.js";import"./ItemMedia-B3mE-krC.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./ChevronUp-B4Qw2TyU.js";import"./ChevronDown-Cin8-QCk.js";import"./ChevronRight-BRSkVVAW.js";import"./ItemBase-BENKYjCv.js";import"./ItemLink-c5exwetX.js";import"./ItemControls-CBTS8zxi.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./Typography-Dxv9MSbD.js";import"./useHighlightedText-ZBcygk0-.js";import"./ContextMenu-V8_bDbgd.js";import"./useDropdownMenuController-pbON2RCT.js";import"./Dropdown-mf9EWUWK.js";import"./SearchField-CW2nl4m_.js";import"./FieldBase-DDJWfLpA.js";import"./Field-BHSHIm9D.js";import"./Label-D9DJQymt.js";import"./Input-DOKzz0Tj.js";import"./MenuListItem-DvV5RcWS.js";import"./MenuListHeading-BEkIHHSP.js";import"./MenuItem-b6Fzjl6t.js";import"./Checkmark-7r8S-fkf.js";import"./ItemLabel-OlP1i4ZU.js";import"./index-BuUpoUlL.js";import"./InformationSquare-t8wgbWET.js";import"./MenuElipsisHorizontal-CRPur8Uj.js";import"./Pencil-DTE761Vg.js";import"./SkipLink-DFS3DuOU.js";import"./Banner-r-U3Cb6i.js";import"./GlobalHeader-pkP8gSeA.js";import"./useIsDesktop-8-GHnyaN.js";import"./GlobalAccountButton-DuBGo6fg.js";import"./Enter-CLqIKE_3.js";import"./GlobalMenuButton-BiVkXz99.js";import"./MenuHamburger-CHdAjUqn.js";import"./AccountSelector-B35oC7Oo.js";import"./Switch-BkDsJFfA.js";import"./AccountMenu-CsigFq3b.js";import"./GlobalMenu-ClOo-T6M.js";import"./ArrowUndo-CqT7_P72.js";import"./Globe-DPkwBtVA.js";import"./BreadcrumbsLink-CBiRFfdZ.js";import"./ArrowRight-BiaOeh9q.js";import"./Footer-BDdV_XIi.js";import"./Flex-qoZntq9f.js";import"./ButtonGroup-LpI9N8Q_.js";import"./ButtonGroupDivider-U6otbiA_.js";import"./ChevronUpDown-DMiF3376.js";import"./ToolbarMenu-Byul9EYL.js";import"./ToolbarSearch-BwAYIpys.js";import"./SettingsModal-D614nUcg.js";import"./ModalBody-BAO_heQB.js";import"./Section-DovdLmcg.js";import"./ButtonIcon-CniHZAXy.js";import"./ButtonLabel-CwlIsNoM.js";import"./TextField-MODjpRwD.js";import"./inboxMenu-BrycH81_.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
