import{a7 as o}from"./iframe-Cj7V21km.js";import{u as S}from"./useProfileLayout-DffceNnS.js";import{u as c,B as g}from"./useBookmarks-kdV8-nOs.js";import{L as k}from"./Layout-CKzA9fKN.js";import{P as x}from"./PageBase-C8kbP67d.js";import{H as p}from"./Heading-BRQOSuW8.js";import{T as b}from"./Toolbar-DOfma81y.js";import{B as I}from"./BookmarkModal-BTq5OZky.js";import{u as h}from"./useInboxLayout-CQ8Yfcz2.js";import{u as f}from"./useAccountMenu-CdZ1XpdU.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-B0fwXfOV.js";import"./Bell-BFQ1zGto.js";import"./Bookmark-Bv_Utm-D.js";import"./ClockDashed-DDbcvs-B.js";import"./globalMenu-DW5ZQeeK.js";import"./PersonCircle-CYbmJpdB.js";import"./Buildings2-56fcZ__k.js";import"./InboxFill-BGibYNWU.js";import"./MenuGrid-DJsZCOkm.js";import"./MagnifyingGlass-B8zavmyI.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CMBlBZQq.js";import"./Trash-tfnqqh8_.js";import"./useLayout-97ljUbj-.js";import"./useLocale-BxIi2exc.js";import"./header-fdj7rbPm.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DM-7OZIV.js";import"./BookmarkSettingsItem-CD1xWfDc.js";import"./QueryLabel-Bp4M4Z81.js";import"./Plus-ubcjdf5p.js";import"./SettingsItemBase-DAczY4vG.js";import"./ItemMedia-CT1Qhol1.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./ChevronUp-d_RO8MoQ.js";import"./ChevronDown-SIqR4dbe.js";import"./ChevronRight-DWxpnRfX.js";import"./ItemBase-B85att75.js";import"./ItemLink-D-NZ4xQE.js";import"./ItemControls-C0hj5koB.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./Typography-B3pfG5kD.js";import"./useHighlightedText-gdz5u-yJ.js";import"./ContextMenu-BXNKEOUh.js";import"./useDropdownMenuController-Dx7Ua8eg.js";import"./Dropdown-BCb8vxkT.js";import"./SearchField-BEMeTu2B.js";import"./FieldBase-D_BM9i5X.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./Input-DnU3MXtK.js";import"./MenuListItem-CO0eoNuC.js";import"./MenuListDivider-Cd6IMkL-.js";import"./MenuListHeading-CRxb5-RD.js";import"./MenuItem-CHAPJdhJ.js";import"./Checkmark-CVZzCtvU.js";import"./ItemLabel-C1bWOeuh.js";import"./InformationSquare-NQW98JPt.js";import"./MenuElipsisHorizontal-CgwSiBWF.js";import"./Pencil-Dn6ZrLxy.js";import"./SkipLink-gx7XgO_W.js";import"./Banner-DQZIlCt5.js";import"./GlobalHeader-CfYlg_Ke.js";import"./useIsDesktop-B_K6d_pz.js";import"./GlobalAccountButton-DIIuy-_h.js";import"./Enter-f6aYZdhd.js";import"./GlobalMenuButton-BYeiSNPC.js";import"./MenuHamburger-DoaqNjt8.js";import"./AccountSelector-D24D4-CR.js";import"./Switch-B__v8UGS.js";import"./AccountMenu-B-eZH9r6.js";import"./GlobalMenu-CHtFHwyb.js";import"./ArrowUndo-CNZhAEE7.js";import"./Globe-CzN74s1b.js";import"./BreadcrumbsLink-C_IpMOma.js";import"./ArrowRight-mfl-HMNl.js";import"./Footer-BaPK0KMZ.js";import"./Flex-CMfzrDGq.js";import"./ButtonGroup--sivQYNz.js";import"./ButtonGroupDivider-L0Fo_y8t.js";import"./ChevronUpDown-DfEfO8Hn.js";import"./ToolbarMenu-DB02q_aj.js";import"./ToolbarSearch-kz-nh4xu.js";import"./SettingsModal-C38mM1Zv.js";import"./ModalBody-Bg14fQJl.js";import"./Section-fD1somlY.js";import"./ButtonIcon-BJPub_WA.js";import"./ButtonLabel-LAa8UsBL.js";import"./TextField-BJ7wP6V8.js";import"./inboxMenu-eHPLaFX0.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
