import{j as o}from"./iframe-0tjTS8nX.js";import{u as h}from"./useInboxLayout-CpUDNXin.js";import{u as j}from"./useAccountMenu-B1Vb5obT.js";import{u as c,B as g}from"./useBookmarks-5bzc56hI.js";import{L as k}from"./Layout-B4WB1J4B.js";import{P as x}from"./PageBase-BuED-U4V.js";import{H as p}from"./Heading-KoSbgrW3.js";import{T as b}from"./Toolbar-BJdW15AL.js";import{B as I}from"./BookmarkModal-jRZkrpPM.js";import{u as S}from"./useProfileLayout-C4d4vnHH.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-oQonN0JV.js";import"./InboxFill-B4Y81moB.js";import"./useId-DNFZveVv.js";import"./Plus-pc4KN7SW.js";import"./PersonCircle-DX0T6Aou.js";import"./Bookmark-DxOqCGna.js";import"./Archive-CxbiNxAX.js";import"./Trash-BerJMn2e.js";import"./InformationSquare-j6Jk7iQg.js";import"./globalMenu-CJTU8m43.js";import"./Buildings2-BAEXb0uK.js";import"./MenuGrid-Cr6WrSLL.js";import"./MagnifyingGlass-Djl9xGro.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-D9mtUJxw.js";import"./useLocale-Csr42hgy.js";import"./header-C8ch5s8L.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-DxduMAeN.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./Flex-BjLBa1JB.js";import"./index-BHkRJabC.js";import"./SettingsSection-CiJ_o1ch.js";import"./Section-CVxfq1Zs.js";import"./BookmarkSettingsItem-Dxjw6uwf.js";import"./QueryLabel-mbq1c_hI.js";import"./SettingsItemBase-BnCBqOeC.js";import"./ChevronUp-DEUjkNQ0.js";import"./ChevronDown-OiQKbBEs.js";import"./ChevronRight-DKBz6hgL.js";import"./ItemLink-Rfzdlob3.js";import"./ItemMedia-DYrXvlN2.js";import"./XMark-C6HGzv3s.js";import"./Avatar-DBihd_YJ.js";import"./Skeleton-CiSYBb75.js";import"./AvatarGroup-Cy536atj.js";import"./Icon-CEoRGh9j.js";import"./ItemControls-C9C9Xohr.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-dEwOKrOW.js";import"./useHighlightedText-D9Q4aeek.js";import"./ContextMenu-fefVb9IK.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Dropdown-Cwwtm8XG.js";import"./MenuElipsisHorizontal-C3l-dan1.js";import"./SearchField-AyG5Put8.js";import"./FieldBase-B4LLLb6y.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./Checkmark-DcFVdWi8.js";import"./useMenu-DGQxaY-L.js";import"./List-lf1yby5Z.js";import"./ListItem-BchTOoTJ.js";import"./Divider-BpiCxUGI.js";import"./Pencil-DXqeRT14.js";import"./SkipLink-BY2Hz4nr.js";import"./GlobalHeader-CVC8ADKh.js";import"./useIsDesktop-BVM8UbJd.js";import"./GlobalAccountButton-DO3Rbjzf.js";import"./Enter-CHSTGyKA.js";import"./GlobalMenuButton-P2GqDve8.js";import"./MenuHamburger-BCh4cxc2.js";import"./AccountSelector-COKc5X0B.js";import"./heading-Cqt39cfA.js";import"./AccountMenu-XAQIjOHS.js";import"./Switch-B0wE7TCS.js";import"./GlobalMenu-C3cbm-xF.js";import"./ArrowUndo-CIy3NdIH.js";import"./Globe-GB118VNm.js";import"./BreadcrumbsLink-Bztu94MA.js";import"./ArrowRight-9wDMuPBl.js";import"./Footer-DNpsRgsY.js";import"./ChevronUpDown-CwtBEqFM.js";import"./ButtonGroup-Rh1_zGFF.js";import"./ButtonGroupDivider-D8a_Wdd9.js";import"./ToolbarMenu-Dn1sARGg.js";import"./ToolbarSearch-CRnAJZip.js";import"./SettingsModal-Zr84fz_q.js";import"./ModalBody-C_UFaejr.js";import"./ButtonIcon-oMKrN6P3.js";import"./ButtonLabel-BqSuwMNK.js";import"./TextField-HOvQkZE2.js";import"./Bell-BGb4n8GH.js";import"./ClockDashed-Dt4Rg0dq.js";const fe={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:i}=j({includeGroups:!0}),{expandedId:r,onClose:s,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:i?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:s,buttons:[{label:"Lagre",onClick:()=>s()},{label:"Slett",variant:"outline",onClick:()=>s()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:i,search:r,groups:s}=c({grouped:!0}),n=e&&i.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:i,groups:s}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:i,search:r,groups:s}=c({grouped:!0}),n=e&&i.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:i,groups:s}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const ye=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ye as __namedExportsOrder,fe as default};
