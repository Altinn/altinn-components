var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a6 as o}from"./iframe-ZrU_khjL.js";import{u as j}from"./useProfileLayout-BcN1O8EE.js";import{u as g,B as x}from"./useBookmarks-DiSTW90Z.js";import{L as k}from"./Layout-BpdryenR.js";import{P as b}from"./PageBase-CHViR1LW.js";import{H as m}from"./Heading-CifG33hf.js";import{T as I}from"./Toolbar-CQ34NIIN.js";import{B as h}from"./BookmarkModal-DeYy3_SA.js";import{u as C}from"./useInboxLayout-CGSg5EZe.js";import{u as y}from"./useAccountMenu-D3F_sQJW.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-Cd4P8gX9.js";import"./Bell-TXVB7B0D.js";import"./Bookmark-ChOY-J_L.js";import"./ClockDashed-D-aa8QuT.js";import"./globalMenu-CXbk4zBY.js";import"./PersonCircle-BpkEJcqi.js";import"./Buildings2-D071t-hU.js";import"./InboxFill-DvTncqt1.js";import"./MenuGrid-OFU6OM4f.js";import"./MagnifyingGlass-Daj1V0tq.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BqlJd5xK.js";import"./Trash-D_09wouA.js";import"./useLayout-BWPtWGZs.js";import"./useLocale-bYy0Yvaq.js";import"./header-CmAt-1UB.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D1AoRPPj.js";import"./BookmarkSettingsItem-ZUh_6zsV.js";import"./QueryLabel-B0LcXmUe.js";import"./Plus-DonfkQJy.js";import"./SettingsItemBase-C8UblevF.js";import"./ItemMedia-RrQv9WL4.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./ChevronUp-CSSlqESb.js";import"./ChevronDown-BB20zuC9.js";import"./ChevronRight-I-BGQZW2.js";import"./ItemBase-CSRJSwJc.js";import"./ItemLink-iiWI53PI.js";import"./ItemControls-BPrmzCX9.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./Typography-FbkShcFO.js";import"./useHighlightedText-CDx2rO1x.js";import"./ContextMenu-xJ1M0fI4.js";import"./useDropdownMenuController-BciGPL7q.js";import"./Dropdown-CeljIqa3.js";import"./SearchField-BKf2_wz5.js";import"./MenuListItem-UylFm72-.js";import"./MenuListDivider-Frk75rx_.js";import"./MenuItem-Cnq3lS8W.js";import"./CheckboxUncheckedIcon-D5_rz1Ju.js";import"./RadioUncheckedIcon-DY3mbg0B.js";import"./ItemLabel-Dkx3E56O.js";import"./FieldBase-Bti6f0lr.js";import"./Field-DiIDUIXB.js";import"./Label-C-OC1u9M.js";import"./Input-pcnWwkdM.js";import"./InformationSquare-v_Dcjud5.js";import"./Pencil-BYYSEeIL.js";import"./SkipLink-BdmTHMy_.js";import"./CookieBanner-CAcj-FZO.js";import"./Link-BZaMHpGV.js";import"./Banner-CPL97lia.js";import"./GlobalHeader-CYt7SSdw.js";import"./useIsDesktop-v0h-kR2t.js";import"./GlobalAccountButton-C1FVFYdc.js";import"./Enter-C2hxxdFf.js";import"./GlobalMenuButton-BzlllpjY.js";import"./MenuHamburger-Bmp7ovD_.js";import"./AccountSelector-BMF--fBy.js";import"./Switch-BdFzWZ9v.js";import"./AccountMenu-CzF8GbtV.js";import"./GlobalMenu-DuXi0wGS.js";import"./Checkmark-CeGyim3w.js";import"./ArrowUndo-DApzQjif.js";import"./Globe-FslnJAPK.js";import"./BreadcrumbsLink-C9H93YOO.js";import"./ArrowRight-zE1jOLWI.js";import"./Footer-CalvC98I.js";import"./Flex-DJ1B1xxZ.js";import"./ButtonGroup-5s3aXo0U.js";import"./ButtonGroupDivider-BU9C7KH5.js";import"./ChevronUpDown-CE-Sc-55.js";import"./ToolbarMenu-CyEZ65ux.js";import"./ToolbarSearch-BeAEDhwm.js";import"./SettingsModal-jqhIWQgm.js";import"./ModalBody-CLgzlTKt.js";import"./Section-dsTDEP7F.js";import"./ButtonIcon-DcntwKuS.js";import"./ButtonLabel-CQpgzAD-.js";import"./TextField-Dy170aXJ.js";import"./inboxMenu-CtrVWWb1.js";const he={title:"Bookmarks/Demo",parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(x,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(k,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(x,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
